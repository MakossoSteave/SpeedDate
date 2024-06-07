import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

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
  constructor(private route: Router , private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,]]
    }, {
      validator: this.passwordMatchValidator
    });
   }
  register() {
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;

      if(password == confirmPassword){
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      this.route.navigate(['home/home'])
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
