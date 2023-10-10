import { Component } from '@angular/core';
import { Path } from 'src/app/config';
@Component({
  selector: 'app-header-movile',
  templateUrl: './header-movile.component.html',
  styleUrls: ['./header-movile.component.css']
})
export class HeaderMovileComponent {
  path:String=Path.url;
}
