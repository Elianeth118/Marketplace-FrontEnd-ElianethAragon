import { Component } from '@angular/core';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-newletter',
  templateUrl: './newletter.component.html',
  styleUrls: ['./newletter.component.css']
})
export class NewletterComponent {
  path:String=Path.url;
}
