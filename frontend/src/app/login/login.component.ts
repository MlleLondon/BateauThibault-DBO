import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  submit(): Observable<LoginResponse> {
    if (this.form.valid) {
      return this.http.post<LoginResponse>(
        'http://localhost:8000/api/login/',
        this.form.getRawValue(),
        { withCredentials: true }
      ).pipe(
        tap(() => this.router.navigate(['/home']))
      );
    }
    throw new Error('Form is invalid');
  }
}
