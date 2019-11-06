import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users = localStorage.getItem('users') ?
  JSON.parse(localStorage.getItem('users')) : [];

  constructor() { }
    getUserName()
    {
      return this.users;
    }
}
