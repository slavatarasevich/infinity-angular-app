import { Component, OnChanges, OnInit, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isValidForm: WritableSignal<boolean> = signal(true);

  logIn() {
    if (this.myForm.valid) {
      console.log('signal', this.isValidForm());
      console.log(this.myForm.status);
      console.log(this.myForm.value);
      this.myForm.reset({ login: '', password: '' });
    } //else {
    //   //
    //   console.log('Fill out the form');
    //   alert('Заполните все поля формы');
    // }
  }

  resetMyForm() {
    this.myForm.reset({ login: '', password: '' });
    console.log('reset');
  }

  ngOnInit(): void {
    console.log('ngOnInit worked');
  }
}
