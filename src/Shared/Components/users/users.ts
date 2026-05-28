import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetUsersService } from '../../Services/getUsers/getUsers-service';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { UserInterface } from '../../Interfaces/user-interface';

@Component({
  selector: 'app-users',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  protected getUsersService = inject(GetUsersService);
  protected listOfUsers: WritableSignal<UserInterface[]> = signal([]);
  // protected usersArray: WritableSignal<UserInterface[]> = signal([]);

  ngOnInit(): void {
    this.getUsersService.getUsers().subscribe((data: UserInterface[]) => {
      this.listOfUsers.set(data);
      console.log(data);
    });
  }
}
