import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  email: string=""
  password1: string=""
  password2: string=""



  constructor(private router: Router) { }

  ngOnInit() {
  }
  sign_in(){
    this.router.navigate(["/login"])
  }

  password_match() {  
    if (this.password1 == this.password2){
      this.router.navigate(["/home"])
    }
  }
}
