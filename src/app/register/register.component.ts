import { Component} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [DataService],
})
export class RegisterComponent {

  constructor(private dataservice: DataService)
  {

  }

}
