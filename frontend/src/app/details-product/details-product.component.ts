import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  products: Product[] = [];
  product: Product = { 
    tig_id: 0, 
    name: 'Selectioner un produit', 
    price: 0, 
    discount: 0, 
    quantityInStock: 0,
    nombre_produit_vendu: 0,
    comments: ''
  };
  newPromotion: number | null = null;
  newQuantity: number | null = null;
  salePrice: number = 0;
  copyDiscount: number = 0;

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsAll();
    this.getProductId(1);
    this.onSelectProductId(12);
  }

  getProductsAll(): void {
    this.productsService.getProducts().subscribe({
      next: (res: Product[]) => {
        this.products = res;
      },
      error: (err) => {
        console.error('Failed loading products:', err);
      }
    });
  }

  getProductId(tig_id: number): void {
    const foundProduct = this.products.find(p => p.tig_id === tig_id);
    if (foundProduct) {
      this.product = foundProduct;
    }
  }

  addSale(item: Product): void {
    this.salePrice = Math.round(((item.price / 100) * (100 - this.copyDiscount)) * 100) / 100;
  }

  onSelectProduct(item: Product): void {
    this.getProductId(item.tig_id);
    this.copyDiscount = item.discount;
    this.addSale(item);
  }

  onSelectProductId(tigId: number): void {
    this.getProductId(tigId);
  }

  onModifyPromotion(item: Product): void {
    if (this.newPromotion !== null) {
      this.copyDiscount = this.newPromotion;
      this.productsService.setPromotion(item.tig_id, this.newPromotion).subscribe({
        next: (res: Product) => {
          this.product = res;
        },
        error: (err) => {
          console.error('Failed to set promotion:', err);
        }
      });
      this.getProductsAll();
    }
  }

  addQuantity(item: Product): void {
    if (this.newQuantity !== null) {
      this.productsService.addQuantity(item.tig_id, this.newQuantity).subscribe({
        next: (res: Product) => {
          this.product = res;
        },
        error: (err) => {
          console.error('Failed to add quantity:', err);
        }
      });
      this.getProductsAll();
    }
  }

  removeQuantity(item: Product): void {
    if (this.newQuantity !== null) {
      this.productsService.removeQuantity(item.tig_id, this.newQuantity).subscribe({
        next: (res: Product) => {
          this.product = res;
        },
        error: (err) => {
          console.error('Failed to remove quantity:', err);
        }
      });
      this.getProductsAll();
    }
  }
}
