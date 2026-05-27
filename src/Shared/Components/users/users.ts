import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetUsersService } from '../../Services/getUsers/getUsers-service';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-users',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  protected getUsersService = inject(GetUsersService);
  protected listOfUsers: UserInterface[] = [];
  // protected usersArray: WritableSignal<UserInterface[]> = signal([]);

  ngOnInit(): void {
    this.getUsersService.getUsers().subscribe((data: UserInterface[]) => (this.listOfUsers = data));
  }
}
