import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<LoginRegisterComponent>) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit($event: {}) {
    if (document.activeElement.id === 'log-in') {
      console.log('Login', this.form.value);
    } else if (document.activeElement.id === 'sign-up') {
      console.log('Sign Up');
    }
    this.dialogRef.close();
  }
}
