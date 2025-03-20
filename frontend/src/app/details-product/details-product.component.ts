import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';
import { catchError, finalize } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  product: Product | null = null;
  newPromotion: number | null = null;
  newQuantity: number | null = null;
  copyDiscount: number = 0;
  loading = false;
  error: string | null = null;
  salePrice: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(parseInt(id));
    }
    this.getProductsAll();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  async getProductsAll(): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      const products = await this.productsService.getProducts()
        .pipe(
          catchError(err => {
            console.error('Failed loading products:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      this.products = products || [];
    } catch (err) {
      this.error = 'Erreur lors du chargement des produits';
      console.error('Failed loading products:', err);
    } finally {
      this.loading = false;
    }
  }

  async getProduct(id: number): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      const products = await this.productsService.getProducts().toPromise();
      if (products) {
        this.product = products.find(p => p.tig_id === id) || null;
        if (this.product) {
          this.salePrice = this.product.price * (1 - this.product.discount / 100);
        }
      }
    } catch (err) {
      this.error = 'Erreur lors du chargement du produit';
      console.error('Failed loading product:', err);
    } finally {
      this.loading = false;
    }
  }

  onSelectProduct(item: Product): void {
    this.getProduct(item.tig_id);
    this.copyDiscount = item.discount;
    this.addSale(item);
  }

  onSelectProductId(tigId: number): void {
    this.getProduct(tigId);
  }

  async onModifyPromotion(item: Product): Promise<void> {
    if (this.newPromotion === null) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const updatedProduct = await this.productsService.setPromotion(item.tig_id, this.newPromotion)
        .pipe(
          catchError(err => {
            console.error('Failed to set promotion:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      if (updatedProduct) {
        this.product = updatedProduct;
        this.copyDiscount = this.newPromotion;
        await this.getProductsAll();
      }
    } catch (err) {
      this.error = 'Erreur lors de la modification de la promotion';
      console.error('Failed to set promotion:', err);
    } finally {
      this.loading = false;
    }
  }

  async addQuantity(item: Product): Promise<void> {
    if (this.newQuantity === null) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const updatedProduct = await this.productsService.addQuantity(item.tig_id, this.newQuantity)
        .pipe(
          catchError(err => {
            console.error('Failed to add quantity:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      if (updatedProduct) {
        this.product = updatedProduct;
        await this.getProductsAll();
      }
    } catch (err) {
      this.error = 'Erreur lors de l\'ajout de la quantité';
      console.error('Failed to add quantity:', err);
    } finally {
      this.loading = false;
    }
  }

  async removeQuantity(item: Product): Promise<void> {
    if (this.newQuantity === null) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const updatedProduct = await this.productsService.removeQuantity(item.tig_id, this.newQuantity)
        .pipe(
          catchError(err => {
            console.error('Failed to remove quantity:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      if (updatedProduct) {
        this.product = updatedProduct;
        await this.getProductsAll();
      }
    } catch (err) {
      this.error = 'Erreur lors de la suppression de la quantité';
      console.error('Failed to remove quantity:', err);
    } finally {
      this.loading = false;
    }
  }

  async addSale(item: Product): Promise<void> {
    // TODO: Implement addSale method
  }
}
