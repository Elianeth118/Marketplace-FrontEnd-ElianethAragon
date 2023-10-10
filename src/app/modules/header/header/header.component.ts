import { Component } from '@angular/core';
import { Path } from 'src/app/config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  path:String=Path.url;
}
