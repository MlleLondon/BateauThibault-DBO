import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductsService, Transaction, Category } from '../services/products.service';
import { DatePipe } from '@angular/common';
import { catchError, finalize } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

Chart.register(...registerables);

interface FilterOption {
  name: string;
}

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit, OnDestroy {
  @ViewChild('myChart') myChart!: ElementRef;

  chart: Chart | null = null;
  transactions: Transaction[] = [];
  categories: Category[] = [];
  readonly filtrage: FilterOption[] = [
    { name: 'all' },
    { name: 'année' },
    { name: 'trimestre' },
    { name: 'mois' },
    { name: 'semaine' },
    { name: 'jour' }
  ];
  chiffresAffaire: { [key: string]: number } = {};
  marge: { [key: string]: number } = {};
  impot = 0;
  loading = false;
  error: string | null = null;

  constructor(
    private readonly productsService: ProductsService,
    private readonly datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getTransaction();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  async getCategories(): Promise<void> {
    try {
      const categories = await this.productsService.getCategories().toPromise();
      if (categories) {
        this.categories = categories;
      }
    } catch (err) {
      console.error('Failed loading categories:', err);
    }
  }

  async getTransaction(): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      const transactions = await this.productsService.getTransaction()
        .pipe(
          catchError(err => {
            console.error('Failed loading transactions:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      if (transactions) {
        this.transactions = transactions;
        await this.getchiffresAffaire("année");
        await this.getMarge();
        this.updateChart();
      }
    } catch (err) {
      this.error = 'Erreur lors du chargement des transactions';
      console.error('Failed loading transactions:', err);
    } finally {
      this.loading = false;
    }
  }

  async getTransactionCategory(categoryId: string): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      const transactions = await this.productsService.getTransactionCategory(categoryId)
        .pipe(
          catchError(err => {
            console.error('Failed loading transactions by category:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      if (transactions) {
        this.transactions = transactions;
        await this.getchiffresAffaire("année");
        await this.getMarge();
        this.updateChart();
      }
    } catch (err) {
      this.error = 'Erreur lors du chargement des transactions par catégorie';
      console.error('Failed loading transactions by category:', err);
    } finally {
      this.loading = false;
    }
  }

  async getchiffresAffaire(period: string): Promise<void> {
    this.chiffresAffaire = {};
    
    this.transactions.forEach(transaction => {
      const date = new Date(transaction.created || '');
      let key = '';
      
      switch (period) {
        case "année":
          key = date.getFullYear().toString();
          break;
        case "mois":
          key = `${date.getFullYear()}-${date.getMonth() + 1}`;
          break;
        case "jour":
          key = date.toISOString().split('T')[0];
          break;
      }
      
      if (key) {
        this.chiffresAffaire[key] = (this.chiffresAffaire[key] || 0) + transaction.price * transaction.quantity;
      }
    });
  }

  async getMarge(): Promise<void> {
    this.marge = {};
    
    this.transactions.forEach(transaction => {
      const date = new Date(transaction.created || '');
      const key = date.getFullYear().toString();
      
      if (transaction.type === 'Sale') {
        this.marge[key] = (this.marge[key] || 0) + transaction.price * transaction.quantity;
      }
    });
  }

  getImpot(): void {
    this.impot = this.marge[Object.keys(this.marge)[0]] * 0.2;
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.myChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(this.chiffresAffaire),
        datasets: [
          {
            label: 'Chiffres d\'affaires',
            data: Object.values(this.chiffresAffaire),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Marge',
            data: Object.values(this.marge),
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
