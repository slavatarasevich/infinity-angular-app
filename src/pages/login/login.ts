import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  logIn() {
    console.log('TEST');
    console.log(this.myForm.status);
    console.log(this.myForm.value);

    // console.log(this.myForm.value);
  }

  ngOnInit(): void {}
}
