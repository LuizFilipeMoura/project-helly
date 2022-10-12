import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ChatWindowService } from './chat-window.service';
export enum whos {
  yours = 'yours',
  theirs = 'theirs',
}
export class Message {
  whos: whos = whos.theirs;
  text = '';
}
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements OnInit, AfterViewInit {
  constructor(public service: ChatWindowService) {}
  whos = whos;

  @Input()
  previousMessages = [
    {
      whos: whos.yours,
      text: "I'm speech bubbleeeeeeeeeeeee fucking enourmous and bug very biggerst in tow in a row",
    },
    {
      whos: whos.theirs,
      text: "I'm speech bubble",
    },
    {
      whos: whos.yours,
      text: "I'm speech bubbleeeeeeeeeeeee fucking enourmous and bug very biggerst in tow in a row",
    },
    {
      whos: whos.theirs,
      text: "I'm speech bubble",
    },
    {
      whos: whos.yours,
      text: "I'm speech bubbleeeeeeeeeeeee fucking enourmous and bug very biggerst in tow in a row",
    },
  ];
  beingTyped: string = '';
  messageIndex = 0;
  fullMessageBeingTyped = this.service.messages[this.messageIndex++];
  ngAfterViewInit() {
    let objDiv = document.getElementById('chat');
    // @ts-ignore
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  typing(event: KeyboardEvent) {
    if (this.fullMessageBeingTyped.length > this.beingTyped.length)
      this.beingTyped += this.fullMessageBeingTyped[this.beingTyped.length];
  }

  sendMessage() {
    this.previousMessages.push({ whos: whos.yours, text: this.beingTyped });
    this.beingTyped = '';
    this.fullMessageBeingTyped = this.service.messages[this.messageIndex++];
    setTimeout( () => {
      let objDiv = document.getElementById('chat');
      // @ts-ignore
      objDiv.scrollTop = objDiv.scrollHeight;
    },10)

  }
}
