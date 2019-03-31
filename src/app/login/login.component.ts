import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @ViewChild('group') group: MatTabGroup;
  @ViewChild('loginError') loginError: ElementRef;
  @ViewChild('forgotError') forgotError: ElementRef;

  @ViewChild('emailLogin') emailLogin: ElementRef;
  @ViewChild('emailForgot') emailForgot: ElementRef;

  constructor() { }

  ngOnInit() { }

  navigateTo(index: number) {
    this.group.selectedIndex = index
  }

  login() {
    
    this.loginError.nativeElement.classList = "error"
  }

  forgot() {
    this.emailForgot.nativeElement.value = 
      this.emailLogin.nativeElement.value
    this.navigateTo(1)
  }

  submit() {
    this.navigateTo(2)
  }

  cancel() {
    this.navigateTo(0)
  }

  back() {
    this.navigateTo(0)
  }

}
