import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './Container/container.component';
import { DemoNewComponent } from './demo-new/demo-new.component';
import { ProductsNewComponent } from './products-new/products-new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, DemoNewComponent, ProductsNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasics';
  message = "Angular is the best JS Framework";

  @ViewChild('dobInput') dob! : ElementRef;
  @ViewChild('ageInput') age! : ElementRef;
  @ViewChild(DemoNewComponent, {static : true}) demoComp! : DemoNewComponent;

  calculateAge(){
    let dobValue = new Date(this.dob.nativeElement.value);
    let timeDiff = Math.abs(Date.now() - dobValue.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    this.age.nativeElement.value = age;
  }
}
 