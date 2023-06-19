import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productos: any[]=[];
  product: any={};
  idProduct: number = -1;

  constructor(private activatedRoute: ActivatedRoute, private infoService: ContentfulService){
    this.activatedRoute.params.subscribe(param => {
      // console.log(param['id']);
      this.idProduct=param['id'];
    });

    this.product=this.infoService.products[this.idProduct];
    // console.log(this.product);

  }

  ngOnInit(): void {
  }


}
