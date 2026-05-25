import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface User {
  id: number;
  name: string;
  lastName: string;
  city: string;
}

@Component({
  selector: 'app-registration',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class RegPage {
  protected name = new FormControl();
  protected lastName = new FormControl();
  protected city = new FormControl();
  protected users: User[] = [];
  constructor() {
    console.log('Reg works!');
  }

  registerHandler() {
    const user = {
      id: Math.random(),
      name: this.name.value,
      lastName: this.lastName.value,
      city: this.city.value,
    };

    this.users.push(user);
    console.log(this.users);
  }
}
