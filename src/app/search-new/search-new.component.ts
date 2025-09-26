import { Component, EventEmitter, Output } from '@angular/core';
// import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-new.component.html',
  styleUrl: './search-new.component.css'
})
export class SearchNewComponent {

  enteredSearchValue = '';
  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  OnSearchTextChange() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  } 
}
