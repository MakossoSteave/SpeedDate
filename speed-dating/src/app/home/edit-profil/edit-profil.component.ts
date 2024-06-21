import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss'],
})
export class EditProfilComponent  implements OnInit {
  username!: string;
  email!: string;
  phone!: string;
  location!: string;
  interests!: string;
  
  constructor(private router: Router) {
    this.username = 'Current Username';
    this.email = 'user@example.com';
    this.phone = '0123456789';
    this.location = 'Current Location';
    this.interests = 'Music, Travel, Cooking';
  }
  saveProfile() {
    console.log('Profile saved:', {
      username: this.username,
      email: this.email,
      phone: this.phone,
      location: this.location,
      interests: this.interests,
    });
    this.router.navigate(['/home/profil']);
  }
  cancel() {
    this.router.navigate(['/home/home']);
  }

  changeProfilePicture() {
    // Add logic to change the profile picture
    console.log('Change profile picture');
  }
  ngOnInit() {}

}
