import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input('total') all = 0; // Now can receive data from parent.
  @Input() free = 0;
  @Input() premium = 0;
}
