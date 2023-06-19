import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  info: any = {};
  products: any[] = [];
  page: string = '';

  constructor(private infoService: ContentfulService, private router:Router){

    this.products=this.infoService.products;
    // console.log(this.products);

  }

  verProducto(i: number){
    this.router.navigate(['/product', i]);
  }

}
