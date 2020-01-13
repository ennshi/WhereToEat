import { Component, OnInit } from '@angular/core';
import  { MatDialog } from '@angular/material';
import {LoginRegisterComponent} from '../login-register/login-register.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(LoginRegisterComponent);
  }

}
