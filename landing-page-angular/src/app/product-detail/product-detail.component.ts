import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/podruct.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute, private _apiServicve: ApiService) { };

  ngOnInit(): void {
    // setTimeout(() => {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiServicve.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            // this.product = this.productList.find(product => product.id == params['productId']);
            this.color = this.product?.price as number > 200 ? 'red' : 'white';
            this.loading = false;
          },
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          }
        });
      }
    });
  }


  // Se carga al segundo
  // }, 1000);


}
