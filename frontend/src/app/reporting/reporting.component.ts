import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductsService, Transaction } from '../services/products.service';
import { DatePipe } from '@angular/common';

Chart.register(...registerables);

interface FilterOption {
  name: string;
}

interface Category {
  id: number;
  name: string;
  products: null;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  chart: Chart | null = null;
  labels: string[] = [];
  dataCA: number[] = [];
  dataCout: number[] = [];
  dataMarge: number[] = [];
  data: ChartData = {
    labels: this.labels,
    datasets: [
      {
        label: 'Chiffres d\'affaires',
        data: this.dataCA,
        fill: false,
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgb(0, 0, 0)',
        tension: 0.1
      },
      {
        label: 'Cout',
        data: this.dataCout,
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(0, 0, 0)',
        tension: 0.1
      },
      {
        label: 'Marge',
        data: this.dataMarge,
        fill: false,
        borderColor: 'rgb(0, 255, 0)',
        backgroundColor: 'rgb(0, 0, 0)',
        tension: 0.1
      }
    ]
  };

  transactions: Transaction[] | null = null;
  readonly filtrage: FilterOption[] = [
    { name: 'all' },
    { name: 'année' },
    { name: 'trimestre' },
    { name: 'mois' },
    { name: 'semaine' },
    { name: 'jour' }
  ];
  chiffreAffaires = 0;
  marge = 0;
  impot = 0;
  readonly categories: Category[] = [
    { id: 0, name: "poissons", products: null },
    { id: 2, name: "crustaces", products: null },
    { id: 1, name: "coquillages", products: null },
  ];

  constructor(
    private readonly productsService: ProductsService,
    private readonly datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getTransaction();
    this.getMarge();
  }

  getTransaction(): void {
    this.productsService.getTransaction().subscribe({
      next: (res: Transaction[]) => {
        this.transactions = res;
        this.getchiffresAffaire("année");
        this.getMarge();
      },
      error: (err) => {
        console.error('Failed loading transactions:', err);
      }
    });
  }

  getTransactionCategory(idCategory: string): void {
    this.productsService.getTransactionCategory(idCategory).subscribe({
      next: (res: Transaction[]) => {
        this.transactions = res;
        this.getchiffresAffaire("année");
        this.getMarge();
      },
      error: (err) => {
        console.error('Failed loading transactions by category:', err);
      }
    });
  }

  convertDate(filtrage: string, date: Date): string {
    switch (filtrage) {
      case "année":
        return date.toLocaleString('default', { month: 'long' });
      case "mois":
        return date.getDate().toString();
      case "semaine":
        return date.toLocaleString('default', { weekday: 'long' });
      case "jour":
        return date.getHours().toString();
      default:
        return date.getFullYear().toString();
    }
  }

  getchiffresAffaire(filtrage: string): void {
    this.labels = [];
    this.dataCA = [];
    this.dataCout = [];
    this.dataMarge = [];
    this.chiffreAffaires = 0;

    if (!this.transactions) return;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayTrimestre = Math.ceil((today.getMonth() + 1) / 4);
    const todayMonth = today.toLocaleString('default', { month: 'long' });
    const todayMonthDay = today.getDate();

    this.transactions.forEach(transaction => {
      const date = new Date(transaction.created);
      const transacYear = date.getFullYear();
      const transacTrimestre = Math.ceil((date.getMonth() + 1) / 4);
      const transacMonth = date.toLocaleString('default', { month: 'long' });
      const transacMonthDay = date.getDate();
      const transacWeekday = date.toLocaleString('default', { weekday: 'long' });
      const transacHour = date.getHours();

      let dateExist = false;
      let label: string | number;

      switch (filtrage) {
        case "année":
          if (transacYear === todayYear) {
            label = transacMonth;
            this.processTransaction(transaction, label, dateExist);
          }
          break;
        case "trimestre":
          if (transacYear === todayYear) {
            label = transacTrimestre;
            this.processTransaction(transaction, label, dateExist);
          }
          break;
        case "mois":
          if (transacYear === todayYear && transacMonth === todayMonth) {
            label = transacMonthDay;
            this.processTransaction(transaction, label, dateExist);
          }
          break;
        case "semaine":
          if (transacYear === todayYear && transacMonth === todayMonth) {
            label = transacWeekday;
            this.processTransaction(transaction, label, dateExist);
          }
          break;
        case "jour":
          if (transacYear === todayYear && transacMonth === todayMonth && transacMonthDay === todayMonthDay) {
            label = transacHour;
            this.processTransaction(transaction, label, dateExist);
          }
          break;
        default:
          label = transacYear;
          this.processTransaction(transaction, label, dateExist);
      }
    });
  }

  private processTransaction(transaction: Transaction, label: string | number, dateExist: boolean): void {
    if (transaction.type === "Sale") {
      this.chiffreAffaires += transaction.price;
      this.updateDataArrays(label, transaction.price, 0, dateExist);
    } else if (transaction.type === "Purchase") {
      this.updateDataArrays(label, 0, transaction.price, dateExist);
    }
  }

  private updateDataArrays(label: string | number, ca: number, cout: number, dateExist: boolean): void {
    const index = this.labels.indexOf(label.toString());
    if (index !== -1) {
      this.dataCA[index] += ca;
      this.dataCout[index] += cout;
      this.dataMarge[index] += (ca - cout);
    } else {
      this.labels.push(label.toString());
      this.dataCA.push(ca);
      this.dataCout.push(cout);
      this.dataMarge.push(ca - cout);
    }
  }

  getMarge(): void {
    this.marge = this.chiffreAffaires - this.dataCout.reduce((a, b) => a + b, 0);
  }

  getImpot(): void {
    this.impot = this.marge * 0.2;
  }

  initChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('myChart', {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chiffres d\'affaires, coûts et marges'
          }
        }
      }
    });
  }
}
