import { Component, OnInit, signal, WritableSignal, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserInterface } from '../../Shared/Interfaces/user-interface';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUsersService } from '../../Shared/Services/getUsers/getUsers-service';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  protected users = inject(GetUsersService);
  usersList: UserInterface[] = [];

  myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isValidForm: WritableSignal<boolean> = signal(true);

  logIn() {
    if (this.myForm.valid) {
      this.usersList.forEach((user) => {
        if (user.email === this.myForm.controls.login.value) {
          return console.log('user found');
        }
        // console.log('user not found');
      });
      this.myForm.reset({ login: '', password: '' }); // uncomment when login works
    }
  }

  resetMyForm() {
    this.myForm.reset({ login: '', password: '' });
    console.log('reset');
  }

  ngOnInit(): void {
    console.log('ngOnInit worked');
    this.users.getUsers().subscribe((data) => {
      console.log(data);
      this.usersList = data;
    });
  }
}
