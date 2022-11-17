import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  email: string=""
  password1: string=""
  password2: string=""



  constructor(
    private router: Router,
    private show_alert: AlertController,
    private auth: AngularFireAuth) { }
  
  

  ngOnInit() {
  }
  sign_in(){
    this.router.navigate(["/login"])
  }

  password_match() {  
    if (this.password1 == this.password2){
      this.sign_up_auth()
    }
    else if (this.password1 != this.password2) {
      this.alert("Passwords Don't Match!","Please re-enter the passwords. Current passwords do not match!")
    }
  }

  async alert (title: string, actual_message: string) {
    let alert = await this.show_alert.create({
      header: title,
      message: actual_message,
      buttons: ["Dismiss"]
    });
    await alert.present();

  }

  sign_up_auth() {
    this.auth.createUserWithEmailAndPassword(this.email,this.password1).then((result) => {
      this.router.navigate(["/tabs"])
      console.log(result)
    }).catch( (err) => {
      console.log(err);
      this.alert("Error!",err.message)
    })
  }


  


}
