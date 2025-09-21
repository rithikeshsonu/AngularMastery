import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `<div class="alert alert-success">
                <p>This website uses cookies to provide better user experience.</p>
              </div>`,
  styles: [`p {
    background-color: lightgrey;
    text-align: center;
  } 
  notification-div {
    padding: 2px;
  }`]
})
export class NotificationComponent {

}
