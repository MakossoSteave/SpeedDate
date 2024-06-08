import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent  implements OnInit {

  nameUser !:string;

  constructor(private router : Router , private route : ActivatedRoute) { }


  ngOnInit() {
    const name =this.route.snapshot.paramMap.get('id')
    if(name){
      this.nameUser = name ;
      console.log(this.nameUser)
    }
    
  }

  redirectProfil(){
    this.router.navigate(['home/profil'])
  }
  match(){
    this.router.navigate(['home/match'])
  }
  searchProfil(){
    this.router.navigate(['home/search'])
  }
  logout(){
    this.router.navigate([''])
  }
}
