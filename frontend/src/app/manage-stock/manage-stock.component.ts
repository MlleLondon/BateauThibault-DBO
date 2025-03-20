import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService, Product, Transaction, Category } from '../services/products.service';
import { catchError, finalize } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

interface CategoryWithProducts extends Category {
  products: Product[];
}

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})
export class ManageStockComponent implements OnInit, OnDestroy {
  categories: CategoryWithProducts[] = [];
  visibility: { [key: string]: boolean } = {};
  newPromotion: { [key: number]: number } = {};
  newQuantity: { [key: number]: number } = {};
  prixTransaction: { [key: number]: number } = {};
  loading = false;
  error: string | null = null;

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  async getCategories(): Promise<void> {
    this.loading = true;
    this.error = null;
    
    try {
      const categories = await this.productsService.getCategories().toPromise();
      if (categories) {
        this.categories = categories.map(category => ({
          ...category,
          products: []
        }));
        await this.getProductsAll();
      }
    } catch (err) {
      this.error = 'Erreur lors du chargement des catégories';
      console.error('Failed loading categories:', err);
    } finally {
      this.loading = false;
    }
  }

  async getProductsAll(): Promise<void> {
    this.loading = true;
    this.error = null;
    
    try {
      await Promise.all(
        this.categories.map(category => this.getProductsCategory(category.name))
      );
    } catch (err) {
      this.error = 'Erreur lors du chargement des produits';
      console.error('Failed loading products:', err);
    } finally {
      this.loading = false;
    }
  }

  async getProductsCategory(category: string): Promise<void> {
    try {
      const products = await this.productsService.getProductCategories(category).toPromise();
      const targetCategory = this.categories.find(c => c.name === category);
      if (targetCategory && products) {
        targetCategory.products = products;
      }
    } catch (err) {
      console.error(`Failed loading products for category ${category}:`, err);
      throw err;
    }
  }

  async onModifyPromotion(): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      await Promise.all(
        Object.entries(this.newPromotion)
          .filter(([_, promotion]) => promotion)
          .map(([tig_id, promotion]) => 
            this.productsService.setPromotion(Number(tig_id), promotion)
              .pipe(
                catchError(err => {
                  console.error(`Failed to set promotion for product ${tig_id}:`, err);
                  return EMPTY;
                })
              )
              .toPromise()
          )
      );
      await this.getProductsAll();
    } catch (err) {
      this.error = 'Erreur lors de la modification des promotions';
      console.error('Failed to set promotions:', err);
    } finally {
      this.loading = false;
    }
  }

  async addTransaction(tig_id: number, type: string): Promise<void> {
    if (!this.newQuantity[tig_id] || this.prixTransaction[tig_id] === undefined) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const transaction: Transaction = {
        price: this.prixTransaction[tig_id],
        quantity: this.newQuantity[tig_id],
        tig_id,
        type
      };
      
      await this.productsService.postTransaction(transaction)
        .pipe(
          catchError(err => {
            console.error('Failed to post transaction:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      await this.getProductsAll();
    } catch (err) {
      this.error = 'Erreur lors de l\'ajout de la transaction';
      console.error('Failed to post transaction:', err);
    } finally {
      this.loading = false;
    }
  }

  async addQuantity(tig_id: number): Promise<void> {
    if (!this.newQuantity[tig_id]) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      await this.productsService.addQuantity(tig_id, this.newQuantity[tig_id])
        .pipe(
          catchError(err => {
            console.error('Failed to add quantity:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      await this.getProductsAll();
      this.newQuantity[tig_id] = 0;
    } catch (err) {
      this.error = 'Erreur lors de l\'ajout de la quantité';
      console.error('Failed to add quantity:', err);
    } finally {
      this.loading = false;
    }
  }

  async removeQuantity(tig_id: number): Promise<void> {
    if (!this.newQuantity[tig_id]) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      await this.productsService.removeQuantity(tig_id, this.newQuantity[tig_id])
        .pipe(
          catchError(err => {
            console.error('Failed to remove quantity:', err);
            return EMPTY;
          })
        )
        .toPromise();
      
      await this.getProductsAll();
      this.newQuantity[tig_id] = 0;
    } catch (err) {
      this.error = 'Erreur lors de la suppression de la quantité';
      console.error('Failed to remove quantity:', err);
    } finally {
      this.loading = false;
    }
  }

  onclick(item: string): void {
    this.visibility[item] = !this.visibility[item];
  }
}
