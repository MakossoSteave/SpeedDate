import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
register() {
throw new Error('Method not implemented.');
}


  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  constructor(private route :Router) { }

  
  ngOnInit() {}

  goLogin() {
    this.route.navigate(['tabs/tab1'])
    }
}
