import { Component } from '@angular/core';
import { Path } from 'src/app/config';
import {ProductsService} from '../../../services/products.service'

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent {
  path:String=Path.url;
  valor:any;
  constructor(private ProductsService:ProductsService){}
  ngOnInit():void{
    this.ProductsService.getdata()
    .subscribe(resp => {
      let i;
      let size = 0;
      for (i in resp) {
        size++;
      }

      let index = Math.floor(Math.random() * size);

      console.log("index", index);
      console.log("size", size);

     
      const keys = Object.keys(resp);
      const clave = keys[index];
      const valor:any = resp[clave as keyof typeof resp];

      
     this.valor=valor.category;
      
    });
  }
}
