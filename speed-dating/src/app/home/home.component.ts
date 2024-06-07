import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  redirectProfil(){
    this.router.navigate(['home/profil'])
  }
}
