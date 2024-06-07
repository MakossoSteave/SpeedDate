import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent  implements OnInit {

  searchQuery: string = '';
  profiles = [
    { id: 1, name: 'Alice', location: 'Paris', picture: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob', location: 'Lyon', picture: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Charlie', location: 'Marseille', picture: 'https://via.placeholder.com/150' },
    // Ajoutez d'autres profils ici
  ];
  filteredProfiles = [...this.profiles];
  constructor( private router:Router) { }

  ngOnInit() {}
  filterProfiles() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProfiles = this.profiles.filter(profile => 
      profile.name.toLowerCase().includes(query) || 
      profile.location.toLowerCase().includes(query)
    );
  }

  viewProfile() {
    this.router.navigate(['/home/profile']);
  }
}
