import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/podruct.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) { }

  /* GET (LISTAR / OBJENER) */
  public getAllProducts(sort?: string): Observable<IProduct[]> { //devuelve un observable de productos
    const params = sort ? `sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  }

  public getProductById(id: number): Observable<IProduct> { //devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> { //devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/actegories`);
  }

  /* POST (CREAR) */
  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  /* PUT (ACTUALIZAR) */
  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  /* DELETE (ELIMINAR) */
  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
