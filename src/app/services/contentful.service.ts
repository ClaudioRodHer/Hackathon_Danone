import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  datos: any = {};
  products: any[] =[];
  constructor(private http: HttpClient) {
    // this.getProducts();
  }

  getInfo(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = 'https://graphql.contentful.com/content/v1/spaces/rw27kv74pjb2?access_token=XM7etNNnryD6g2ox7RqesSxXGuIkKZkb2-MfJuiW2wU&query={productoCollection{items{nombre,calorias,ingredientes,detalles,descripcion,size,hc,grasas,ean,ecologicalFootPrint,co2Emissions,carbonFootPrint,marca,imgProducto{url,title},nutriScore{url,title}}}}';
    return this.http.get(url);
  }


  getProducts(){
    this.getInfo().pipe(map((resp: any) => resp['data'].productoCollection.items)).subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

}
