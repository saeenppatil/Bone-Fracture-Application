import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string=""
  password: string=""

  constructor(
    private router: Router,
    private show_alert: AlertController,
    private auth: AngularFireAuth) { }

  ngOnInit() {
  }
  sign_up() {
    this.router.navigate(["/sign-up"])
  }

  actually_login() {
    if(this.email != "" && this.password != ""){
      this.sign_up_auth()
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
    this.auth.signInWithEmailAndPassword(this.email,this.password).then((result) => {
      this.router.navigate(["/tabs"])
      console.log(result)
    }).catch( (err) => {
      console.log(err);
      this.alert("Error!",err.message)
    })
  }


}


