import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `<div class="alert alert-success" [hidden]="displayNotification">
                <p>This website uses cookies to provide better user experience.</p>
                <div class="close">
                  <button class="btn" (click)="closeNotification()">X</button>
                </div>
              </div>`,
  styles: [`p {
    background-color: lightgrey;
    text-align: center;
  }
  notification-div {
    padding: 2px;
  }
  .close {
    text-align: right;
    margin-top: -15px;
    float: right;
  }
  `]
})
export class NotificationComponent {
  displayNotification = false;
  closeNotification(){
    this.displayNotification = true;
  }
}
