import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  address: address;

  constructor() {
    this.name = 'John Doe';
    this.email = 'john@mail.com'
    this.address = {
      street: '12 Main St',
      city: 'Golden',
      state: 'CO',
    }
  }

  ngOnInit() {
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}
