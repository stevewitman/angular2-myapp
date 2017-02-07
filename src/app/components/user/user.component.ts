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
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'John Doe';
    this.email = 'john@mail.com'
    this.address = {
      street: '12 Main St',
      city: 'Golden',
      state: 'CO',
    }
    this.hobbies = ['Music', 'Movies', 'Sports']
    this.showHobbies = false
  }

  ngOnInit() {
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}
