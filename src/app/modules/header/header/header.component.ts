import { Component } from '@angular/core';
import { Path } from 'src/app/config';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  path:String=Path.url;
  valorc:any;
  
  arrayTitleList:Array<any>=[];
  
  constructor(private categoriesService:CategoriesService) {

  }
  ngOnInit():void{
    this.categoriesService.getdata()
    .subscribe(resp=>{
      this.categoriesService.getdata()
      .subscribe((res)=>{
        this.valorc=resp;
        let i;
        let size=0;
    for(i in resp){
      const keys=Object.keys(resp);
      const clave=keys[size];
      const valor:any=resp[clave as keyof typeof resp]; 
      this.arrayTitleList.push(JSON.parse(valor.title_list));
      console.log(this.arrayTitleList);
    }
        
      })
  
    })

  }
}
