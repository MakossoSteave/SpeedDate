import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent  implements OnInit {

  matches = [
    { id: 1, name: 'Alice', location: 'Paris', picture: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob', location: 'Lyon', picture: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Charlie', location: 'Marseille', picture: 'https://via.placeholder.com/150' },
  ];

  constructor(private router : Router) { }

  ngOnInit() {}
  openChat(matchId: number) {
    // Ajoutez ici la logique pour ouvrir la conversation avec le match
    this.router.navigate(['/chat', matchId]);
  }

}
