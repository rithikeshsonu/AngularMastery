import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from '../header/header.component';
import { NotificationComponent } from "../notification/notification.component";
import { SearchComponent } from "../search/search.component";
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    standalone: true,
    imports: [NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent],
    })

export class ContainerComponent {

}