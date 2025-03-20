import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

export interface Category {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly urlApi = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/infoproducts/`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApi}/categories/`);
  }

  setPromotion(id: number, discount: number): Observable<Product> {
    return this.http.put<Product>(`${this.urlApi}/modifyDiscount/${id}/${discount}/`, {});
  }

  addQuantity(id: number, quantity: number): Observable<Product> {
    return this.http.put<Product>(`${this.urlApi}/incrementStock/${id}/${quantity}/`, {});
  }

  removeQuantity(id: number, quantity: number): Observable<Product> {
    return this.http.put<Product>(`${this.urlApi}/decrementStock/${id}/${quantity}/`, {});
  }

  getProductCategories(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/${category}/`);
  }

  postTransaction(trans: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.urlApi}/transactions/`, trans);
  }

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.urlApi}/transactions/`);
  }

  getTransactionCategory(category: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.urlApi}/transactions/${category}/`);
  }
}
