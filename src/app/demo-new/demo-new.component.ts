import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-new',
  standalone: true,
  imports: [],
  templateUrl: './demo-new.component.html',
  styleUrl: './demo-new.component.css'
})
export class DemoNewComponent {

  sayHello(){
    console.log("Hello from Demo New Component");
  }
  
}
