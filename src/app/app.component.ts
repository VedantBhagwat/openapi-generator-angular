import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserApiFactory } from '../lib/axios-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'openapi-generator-angular';
  userApi = UserApiFactory();

  constructor() {
    this.userApi
      .loginUser({ username: 'admin', password: 'password' })
      .then((response) => {
        console.log('loginUser', response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
