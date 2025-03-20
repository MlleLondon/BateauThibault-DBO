import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EMPTY } from 'rxjs';

interface LoginResponse {
  token?: string;
  message?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly form: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    formBuilder: FormBuilder,
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (!this.form.valid) {
      this.error = 'Veuillez remplir tous les champs correctement';
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const response = await this.http.post<LoginResponse>(
        `${environment.apiUrl}/api/login/`,
        this.form.getRawValue(),
        { withCredentials: true }
      ).pipe(
        tap(() => this.router.navigate(['/home'])),
        catchError(err => {
          this.error = 'Identifiants invalides';
          console.error('Login failed:', err);
          return EMPTY;
        })
      ).toPromise();

      if (!response) {
        throw new Error('No response from server');
      }
    } catch (err) {
      this.error = 'Une erreur est survenue lors de la connexion';
      console.error('Login error:', err);
    } finally {
      this.loading = false;
    }
  }
}
