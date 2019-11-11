import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{
    form: FormGroup;

  users = localStorage.getItem('users') ?
    JSON.parse(localStorage.getItem('users')) : [];

  email = '';
  password = '';
  address = '';

  ngOnInit() {
      this.form = new FormGroup({
        email:new FormControl('',[
          Validators.email,
          Validators.required
        ]),
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

      console.log('Form Data:', formData)

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
