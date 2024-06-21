import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServiceRegisterService } from '../register/service-register.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent  implements OnInit {

  nameUser !:string;

  userProfil : any ;
  constructor(private router : Router , private route : ActivatedRoute , private profilService : ServiceRegisterService ,  private cookieService: CookieService, ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.profilService.getProfil(+id).subscribe( 
        response =>{
           this.userProfil = response
           this.saveUserProfilToCookie(); 
        }

      )
      const testChangeTel ={
        "id":1,
        "number":"0746460513"
      }
      this.profilService.updateTel(testChangeTel).subscribe(
        response =>{
          console.log(response)
        }
      )
      console.log("de")
    }
   

  }
  saveUserProfilToCookie(): void {
    const userProfilString = JSON.stringify(this.userProfil);
    this.cookieService.set('userProfilData', userProfilString);
    console.log(this.cookieService.getAll())
    console.log(this.userProfil)
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
  chat(){
    this.router.navigate(['home/chat'])

  }
  logout(){
    this.cookieService.deleteAll()
    this.router.navigate([''])
  }
}
