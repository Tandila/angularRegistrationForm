import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class DataService {

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
    getUsers(){
       return localStorage.getItem('users');
    }

    delUsers(){
     return localStorage.removeItem('users');
    }
}
