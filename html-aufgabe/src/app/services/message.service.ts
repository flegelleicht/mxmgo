import { Injectable } from '@angular/core';

/**
 * Provides custom message logging.
 *
 * We might have to display some messages (info or error) to the user
 * and collect them here.
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
  
  clear() {
    this.messages = [];
  }
}
