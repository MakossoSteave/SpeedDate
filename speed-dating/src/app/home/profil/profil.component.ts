import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent  implements OnInit {
  photos: string[] = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300'
  ];

  constructor( private router : Router) { }

  ngOnInit() {}

  editProfile(){
    this.router.navigate(['home/edit'])
    console.log("profile")
  }
  logout(){
    this.router.navigate([''])
  }
}
