import { Component } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private infoService: ContentfulService){
    this.infoService.getProducts();
  }

}
