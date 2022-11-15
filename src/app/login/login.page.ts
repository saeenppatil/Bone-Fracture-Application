import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string=""
  password: string=""

  constructor(private router: Router) { }

  ngOnInit() {
  }
  sign_up() {
    this.router.navigate(["/sign-up"])
  }

  actually_login() {
    if(this.email != "" && this.password != ""){
      this.router.navigate(["/home"])
    }
  }

}


