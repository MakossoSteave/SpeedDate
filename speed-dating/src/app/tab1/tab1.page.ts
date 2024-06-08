import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceRegisterService } from '../register/service-register.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  email!: string;
  password!: string;
  loginForm!: NgForm;


  user = {
    email: "steave1@live.fr",
    password: "psw"
  }
  constructor(private router: Router, private loginService: ServiceRegisterService, private toastController: ToastController) { }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
  login(loginForm: NgForm) {
    const email = this.email
    const password = this.password

    const userValited = {
      "email": this.email,
      "password": this.password
    }
    if (!this.email || !this.password) {
      this.presentErrorToast('Veuillez remplir tous les champs.');
      return;
    }
 
    this.loginService.login(userValited).subscribe(
      response => {

        if (response != undefined) {
          const myData = { param1: response.id, param2: response.email };
          this.router.navigate(['/home/home/' +{ state: myData }])
        } else {
          console.log(" le mots de passe ou l'email est incorrect")
        }
      },
      error => {
        console.error('Erreur lors de la connection :', error);
      }
    );
}
redirectRegister(){
  this.router.navigate(['/register'])
}
}
