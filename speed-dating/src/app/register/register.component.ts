import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceRegisterService } from './service-register.service';
import { user } from '../user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordMatchValidator: any;

  user!: user;

  constructor(private route: Router , private formBuilder: FormBuilder , private registerService : ServiceRegisterService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required,]]
    }, {
      validator: this.passwordMatchValidator
    });
  
   }
  register() {
    if (this.registerForm.valid) {
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;
      
      const userValited ={
        "email" :this.registerForm.get('email')?.value,
        "password":this.registerForm.get('password')?.value,
        "username": this.registerForm.get('username')?.value
      }
      if(password == confirmPassword){
        this.user = userValited

      this.registerService.register(this.user).subscribe(
        response => {
          if(response != undefined){
            this.route.navigate(['/home/home/'+response.username])
          }else{
            console.log("une erreur s'est produit lors de votre inscription , l'email utilisé existe deja ")
          }
          

        },
        error => {
          console.error('Erreur lors de l\'inscription :', error);
        }
      );
     // this.route.navigate(['home/home'])
      }else{
        console.log("les deux mots de passe ne semble pas être les même")
      }

      // Faites quelque chose avec les données du formulaire
 
    }
  }
  goLogin() {
    this.route.navigate(['tabs/tab1'])
  }
}
