import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit{
  form: FormGroup;

  users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  email = '';
  password = '';
  address = '';

  ngOnInit() {
    this.form = new FormGroup({
      email:new FormControl('',Validators.compose([
        Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'),
        Validators.required
      ])),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ge'),
        city: new FormControl('', Validators.required)
      })
    })
  }

  submit() {
    if(this.form.valid){
      console.log('form: ', this.form);
      const formData = {...this.form.value};

      console.log('Form Data:', formData);

      this.users.unshift({ username:this.form.value.email, password:this.form.value.password, address: this.form.value.address});
      localStorage.setItem('users', JSON.stringify(this.users));

    }

  }

  setCapital() {
    const cityMap = {
      ge: 'Tbilisi',
      us: 'Washington',
      uk: 'Kiev',
    }
    const city = cityMap[this.form.get('address').get('country').value];
    this.form.patchValue({
      address: {city}
    })
  }
}
