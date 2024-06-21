import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRegisterService } from 'src/app/register/service-register.service';

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
  userProfil:any;
  constructor( private router : Router , private cookieService : CookieService  , private registerService : ServiceRegisterService) { }

  ngOnInit() {
    this.getUserProfilFromCookie();
    const updateteltest  ={
      "id":1,
      "number": "0646460513"
    }
    this.registerService.updateTel(updateteltest).subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  getUserProfilFromCookie(): void {
    const userProfilString = this.cookieService.get('userProfilData');

    if (userProfilString) {
      this.userProfil = JSON.parse(userProfilString);
      console.log('Données utilisateur récupérées du cookie :', this.userProfil);
    } else {
      console.log('Aucune donnée utilisateur trouvée dans le cookie.');
    }
  }
  editProfile(){
    this.router.navigate(['home/edit'])
    console.log("profile")
  }
  logout(){
    this.cookieService.deleteAll()
    this.router.navigate([''])
  }
}
