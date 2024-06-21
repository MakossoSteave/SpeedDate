import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



interface Chat {
  name: string;
  lastMessage: string;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  chats: Chat[] = [
    { name: 'Chat 1', lastMessage: 'Salut !' },
    { name: 'Chat 2', lastMessage: 'Bonjour !' },
  ];
  newMessage: string = '';


  constructor( private router : Router) { }

  ngOnInit() {}

  openChat(chat: Chat) {
    // Naviguer vers la page de chat spécifique
    this.router.navigate(['home/chat', chat.name]);
  }
}
