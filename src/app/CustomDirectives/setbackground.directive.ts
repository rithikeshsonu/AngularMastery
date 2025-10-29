import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appSetBackground]',
    standalone: true
})

export class SetBackgroundDirective{
    constructor(element: ElementRef) {
        console.log("SetBackgroundDirective - Directive is called");
        element.nativeElement.style.backgroundColor = 'lightblue';
    }
} 