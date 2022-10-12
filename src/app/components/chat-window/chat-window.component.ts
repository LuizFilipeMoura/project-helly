import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements OnInit {
  constructor() {}

  message = 'i love you';
  beingTyped: string = '';
  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  typing(event: KeyboardEvent) {
    if (this.message.length > this.beingTyped.length)
      this.beingTyped += this.message[this.beingTyped.length];
  }
}
