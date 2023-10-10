import { Component } from '@angular/core';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  path:String=Path.url;
}
