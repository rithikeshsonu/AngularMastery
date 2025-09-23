import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from '../header/header.component';
import { NotificationComponent } from "../notification/notification.component";
import { SearchComponent } from "../search/search.component";
import { ProductsComponent } from "../products/products.component";
import { CoursesComponent } from "../courses/courses.component";
import { NewHeaderComponent } from "../new-header/new-header.component";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    standalone: true,
    imports: [NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent, CoursesComponent, NewHeaderComponent],
    })

export class ContainerComponent {

}