import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  tig_id: number;
  name: string;
  price: number;
  discount: number;
  quantityInStock: number;
  nombre_produit_vendu: number;
  comments: string;
}

export interface Transaction {
  price: number;
  quantity: number;
  tig_id: number;
  type: string;
  created?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly urlApi = "http://localhost:8000";

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/infoproducts/`);
  }

  setPromotion(id: number, discount: number): Observable<any> {
    return this.http.get(`${this.urlApi}/modifyDiscount/${id}/${discount}/`);
  }

  addQuantity(id: number, quantity: number): Observable<any> {
    return this.http.get(`${this.urlApi}/incrementStock/${id}/${quantity}/`);
  }

  removeQuantity(id: number, quantity: number): Observable<any> {
    return this.http.get(`${this.urlApi}/decrementStock/${id}/${quantity}/`);
  }

  getProductCategories(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/${category}/`);
  }

  postTransaction(trans: Transaction): Observable<any> {
    return this.http.post(`${this.urlApi}/transactions/`, trans);
  }

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.urlApi}/transactions/`);
  }

  getTransactionCategory(category: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.urlApi}/transactions/${category}/`);
  }
}
