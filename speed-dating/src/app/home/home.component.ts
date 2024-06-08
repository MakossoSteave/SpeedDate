import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServiceRegisterService } from '../register/service-register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent  implements OnInit {

  nameUser !:string;

  constructor(private router : Router , private route : ActivatedRoute , private profilService : ServiceRegisterService ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
 

    const name =this.route.snapshot.paramMap.get('id')
    this.route.queryParams.subscribe(params => {
      // Accédez aux paramètres ici
      const id = params['id'];
      const email = params['otherParam'];

      console.log(id)
      console.log(email)
    }
    )
    if(name){
      this.nameUser = name ;
     // console.log(this.nameUser)
      this.profilService.getProfil(this.nameUser).subscribe(
        response => {
          console.log(response)
        }
      )
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
