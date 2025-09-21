import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from '../header/header.component';
import { NotificationComponent } from "../notification/notification.component";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    standalone: true,
    imports: [NavComponent, HeaderComponent, NotificationComponent],
    })

export class ContainerComponent {

}