import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: Date;
  location: string;
}

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss'],
})
export class EventManagementComponent  implements OnInit {

  events: Event[] = [
    { id: 1, title: 'Speed Dating Event 1', date: new Date(), location: 'Location 1' },
    { id: 2, title: 'Speed Dating Event 2', date: new Date(), location: 'Location 2' },
  ];
  constructor(private router: Router) {}

  addEvent() {
    // Naviguer vers la page d'ajout d'événement
    this.router.navigate(['/add-event']);
  }

  editEvent(event: Event) {
    // Naviguer vers la page d'édition d'événement avec l'ID de l'événement
    this.router.navigate(['/edit-event', event.id]);
  }

  deleteEvent(event: Event) {
    // Supprimer l'événement de la liste
    this.events = this.events.filter(e => e.id !== event.id);
  }
  ngOnInit() {}

}
