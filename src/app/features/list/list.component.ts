import { Component, computed, Inject, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items.component';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';
import { AuthFunctionsService } from '../../shared/services/auth-functions.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent, MatCardModule,NgClass
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );
  userId?: string ;

  constructor(
    @Inject(ProductsService) private productService: ProductsService,
    private authFunctions: AuthFunctionsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.userId = await this.authFunctions.getUserId();
    if (this.userId) {
      this.loadUserProducts(this.userId);
    } else {
      // Se não houver usuário logado, assegure que a lista de produtos permaneça vazia
      this.products.set([]);
      console.log('Nenhum usuário logado - lista de produtos vazia.');
    }
  }

  loadUserProducts(userId: string) {
    this.productService.getProductsByUser(userId).subscribe(products => {
      this.products.set(products);
    });
  }







  productsService = inject(ProductsService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);
  
  nonPurchasedProducts = computed(() => this.products().filter(product => !product.compra));
  purchasedProducts = computed(() => this.products().filter(product => product.compra));
  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          if (this.userId) {
            this.loadUserProducts(this.userId);
          }
          });
        });
      };
  }

