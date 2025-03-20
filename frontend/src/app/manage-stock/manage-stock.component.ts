import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

interface Product {
  tig_id: number;
  name: string;
  price: number;
  discount: number;
  quantityInStock: number;
  nombre_produit_vendu: number;
  comments: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[] | null;
}

interface Transaction {
  price: number;
  quantity: number;
  tig_id: number;
  type: string;
}

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})
export class ManageStockComponent implements OnInit {
  readonly categories: Category[] = [
    { id: 1, name: "poissons", products: null },
    { id: 2, name: "crustaces", products: null },
    { id: 3, name: "coquillages", products: null },
  ];

  newQuantity: number[] = [];
  newPromotion: number[] = [];
  prixTransaction: number[] = [];
  visibility: { [key: string]: boolean } = {};

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsAll();
  }

  getProductsAll(): void {
    this.categories.forEach(category => {
      this.getProductsCategory(category.name);
    });
  }

  getProductsCategory(category: string): void {
    this.productsService.getProductCategories(category).subscribe({
      next: (res: Product[]) => {
        const targetCategory = this.categories.find(c => c.name === category);
        if (targetCategory) {
          targetCategory.products = res;
        }
      },
      error: (err) => {
        console.error('Failed loading products:', err);
      }
    });
  }

  onModifyPromotion(): void {
    this.newPromotion.forEach((promotion, tig_id) => {
      if (promotion) {
        this.productsService.setPromotion(tig_id, promotion).subscribe({
          error: (err) => console.error('Failed to set promotion:', err)
        });
      }
    });
    this.getProductsAll();
  }

  addQuantity(): void {
    this.newQuantity.forEach((quantity, tig_id) => {
      if (quantity && this.prixTransaction[tig_id]) {
        this.addTransaction(tig_id, "Purchase");
      }
    });
    this.getProductsAll();
  }

  removeQuantity(): void {
    this.newQuantity.forEach((quantity, tig_id) => {
      if (quantity && this.prixTransaction[tig_id] !== undefined) {
        const transactionType = this.prixTransaction[tig_id] === 0 ? "Unsold" : "Sale";
        this.addTransaction(tig_id, transactionType);
      }
    });
    this.getProductsAll();
  }

  modifyStock(): void {
    this.addQuantity();
    this.onModifyPromotion();
    this.getProductsAll();
  }

  addTransaction(tig_id: number, type: string): void {
    if (this.newQuantity[tig_id] && this.prixTransaction[tig_id] !== undefined) {
      const transaction: Transaction = {
        price: this.prixTransaction[tig_id],
        quantity: this.newQuantity[tig_id],
        tig_id,
        type
      };
      
      this.productsService.postTransaction(transaction).subscribe({
        error: (err) => console.error('Failed to post transaction:', err)
      });
    }
  }

  onclick(item: string): void {
    this.visibility[item] = !this.visibility[item];
  }
}
