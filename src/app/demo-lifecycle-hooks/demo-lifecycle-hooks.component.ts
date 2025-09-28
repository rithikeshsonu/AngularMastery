import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './demo-lifecycle-hooks.component.html',
  styles: ``
})
export class DemoLifecycleHooksComponent  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy { //Not mandatory to implement The LifeCycle hooks but is a good practice
  @Input() value = 'rithikesh';
  constructor() { //First method to be called(When component is created)
    console.log('Constructor called');
    // console.log(this.value);
  }

  ngOnInit(): void { //Second Life Cycle hook to be called(When component is initialized)
    console.log('ngOnInit called');
    // console.log(this.value);
  }
  ngOnChanges(changes: SimpleChanges): void { //First Life Cycle hook to be called And also when the value of the input property changes
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngDoCheck(): void { //Called during every change detection run(Even if thers's no change in the input property value)
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void { //For first change detection cycle and when projected content is initialized
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(): void { //For each change detection cycle and when projected content is checked
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void { //For first change detection cycle and when component's views and child views are initialized
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void { //For each change detection cycle and when component's views and child views are checked
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void { //When component is about to be destroyed
    console.log('ngOnDestroy called');
  }

}
