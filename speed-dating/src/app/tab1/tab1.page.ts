import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceRegisterService } from '../register/service-register.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  email!: string;
  password!: string;
  loginForm!: NgForm;

  
  user={
    email:"steave1@live.fr",
    password:"psw"
  }
  constructor( private router : Router , private loginService: ServiceRegisterService) {}
  login( loginForm: NgForm){
    const email = this.email
    const password = this.password

    const userValited ={
      "email" :this.email,
      "password":this.password
    }
    if(this.email != undefined && this.password != undefined){
          this.loginService.login(userValited).subscribe(
            response => {
            
              if(response !=undefined){
                this.router.navigate(['/home/home/'+response.username])
              
               // console.log('connexion réussie !', response.username);
              }else{
                console.log(" le mots de passe ou l'email est incorrect")
              }
            },
            error => {
              console.error('Erreur lors de la connection :', error);
            }
          );
        
    }else{
      console.log("veuilliez insérez un nom d'utilisateur et un mots de passe ")
    }
  
  }

  redirectRegister(){
    this.router.navigate(['/register'])
  }
}
