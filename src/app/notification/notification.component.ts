import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgClass],
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
                <p>This website uses cookies to provide better user experience.</p>
                <div class="close">
                  <button class="btn" (click)="closeNotification()">X</button>
                </div>
              </div>`,
  styles: [`p {
    background-color: lightgrey;
    text-align: center;
  }
  .notification-div {
    padding: 2px;
  }
  .close {
    text-align: right;
    margin-top: -15px;
    float: right;
  }
  .fadeOut {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }
  `]
})
export class NotificationComponent {
  displayNotification = false;
  closeNotification(){
    this.displayNotification = true;
  }
}
