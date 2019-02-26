import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  contacts = [];
  constructor() {
    this.contacts = [
      {
        ID: 1,
        first_name: 'Jacob',
        last_name: 'Nan',
        email: 'walkingblock@gmail.com'
      },
      {
        ID: 1,
        first_name: 'Billy',
        last_name: 'Mays',
        email: 'walkingblock@gmail.com'
      },
      {
        ID: 1,
        first_name: 'John',
        last_name: 'Krasinski',
        email: 'walkingblock@gmail.com'
      }
    ];
  }

  delete(e) {
    console.log('from delete e:', e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.push({
      ID: 1,
      first_name: 'Jacob',
      last_name: 'Nan',
      email: 'walkingblock@gmail.com'});
  }
  save(row) {
    console.log('from save row: ', row);
  }
}
