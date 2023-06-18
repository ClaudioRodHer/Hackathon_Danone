import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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

  constructor(private infoService: ContentfulService){

    this.infoService.getInfo().subscribe((resp: any) => {
      this.info=resp;
      if (this.info) {
        this.products = this.info.data.productoCollection.items;
      }
      console.log(this.products);
    });


  }

}
