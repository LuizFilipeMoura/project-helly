import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatWindowService {
  constructor() {}
  messages = [
    'i love you',
    'more than anything',
    "and i know it's hard being like this",
    "but i'll find a way",
  ];
}
