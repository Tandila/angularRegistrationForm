import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {

  users = localStorage.getItem('users') ?
    JSON.parse(localStorage.getItem('users')) : [];

  username = '';
  password = '';

  addUser(){
    if(this.username.trim() && this.password.trim()){
      this.users.unshift({ username:this.username, password:this.password});
       localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  constructor(private dataservice: DataService)
  {
      this.users = dataservice.getUserName();
  }
  ngOnInit() {
  }
}
