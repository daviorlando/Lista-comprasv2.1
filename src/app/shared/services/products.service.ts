import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);
  products: any;
  private apiUrl = 'http://localhost:3000/products';

  getProductsByUser(userId: string): Observable<Product[]> {
    // Faz uma requisição GET com o filtro do userId
    return this.httpClient.get<Product[]>(`${this.apiUrl}?userId=${userId}`);
  }





  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  get(id: string) {
    return this.httpClient.get<Product>(`/api/products/${id}`);
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put(`/api/products/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateCompra(compra: boolean) {

    return this.httpClient.put(`/api/products/${compra}`, {compra});
  }


}




