import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'John Doe';
  email = 'john@mail.com'
  address = {
    street: '12 Main St',
    city: 'Golden',
    state: 'CO',
  }
}
