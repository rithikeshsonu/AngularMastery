import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child-demo',
  standalone: true,
  imports: [],
  templateUrl: './content-child-demo.component.html',
})
export class ContentChildDemoComponent implements OnInit, AfterContentInit {

  ngOnInit(): void {
    console.log("this.paragraphElement", this.paragraphElement);
    console.log("this.paragraphElement.nativeElement.textContent", this.paragraphElement.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - this.paragraphElement", this.paragraphElement);
    console.log("ngAfterContentInit - this.paragraphElement.nativeElement.textContent", this.paragraphElement.nativeElement.textContent);
    this.paragraphElement.nativeElement.textContent = "This is modified paragraph";
  }
  @ContentChild('paragraph', { static: true }) paragraphElement!: ElementRef;
}
