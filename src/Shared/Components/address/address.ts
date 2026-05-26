import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})
export class Address {
  protected addressForm = new FormGroup({
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
  });

  protected submitAddress() {
    if (this.addressForm.valid) {
      console.log('address has been submitted');
      console.log(this.addressForm.value);
      this.addressForm.reset({ street: '', city: '', zipCode: '' });
    }
  }
}
