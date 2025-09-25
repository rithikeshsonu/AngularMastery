import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input('total') all = 0; // Now can receive data from parent.
  @Input() free = 0;
  @Input() premium = 0;

  selectedRadioButton = 'All';
  
  @Output()
  filterRadioButtonChange : EventEmitter<string> = new EventEmitter<string>();
  onRadioButtonChange() {
    this.filterRadioButtonChange.emit(this.selectedRadioButton);
    // console.log(this.selectedRadioButton);
  }
}
