import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgIf } from "../../../node_modules/@angular/common/index";
// ✅ Correct
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue = '';
  changeSearchValue(eventData: any){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
