import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [DataService],
})
export class AppComponent {

  constructor(private dataservice: DataService)
  {

  }
}
