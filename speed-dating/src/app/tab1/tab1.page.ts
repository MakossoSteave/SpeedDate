import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor( private router : Router) {}
  login( loginForm: NgForm){
    const email = this.email
    const password = this.password

    if(this.email != undefined && this.password != undefined){
        if(this.email == this.user.email && this.password == this.user.password){
          this.router.navigate(['/home/home'])
      console.log("connection effectuer")
    }else{
      console.log("l'utilisateur n'hexiste pas")
    }
    }else{
      console.log("veuilliez insérez un nom d'utilisateur et un mots de passe ")
    }
  
  }

  redirectRegister(){
    this.router.navigate(['/register'])
  }
}
