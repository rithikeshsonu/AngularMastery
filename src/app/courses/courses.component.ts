import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from  "@angular/common";
import { SearchNewComponent } from "../search-new/search-new.component";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgStyle, CommonModule, SearchNewComponent, FilterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    {id: 101, name: 'Angular', author: 'Rithikesh', duration: 48, type: 'Free',
      price: 0, ratings: 3.5, image: 'assets/LinkedInBanner.png', description: 'Learn Angular from scratch' },
    {id: 102, name: 'React', author: 'Jordan Walke', duration: 28, type: 'Premium',
      price: 999, ratings: 4.5, image: 'assets/ReactJS.png', description: 'Learn React from scratch' },
    {id: 103, name: 'Vue', author: 'Evan You', duration: 78, type: 'Free',
      price: 0, ratings: 4.0, image: 'assets/VueJS.png', description: 'Learn Vue from scratch' },
    {id: 104, name: 'Node', author: 'Ryan Dahl', duration: 65, type: 'Premium',
      price: 799, ratings: 4.2, image: 'assets/NodeJS.png', description: 'Learn Node from scratch' },
    {id: 105, name: 'JavaScript', author: 'Brendan Eich', duration: 65, type: 'Free',
      price: 0, ratings: 4.8, image: 'assets/JavaScript.png', description: 'Learn JavaScript from scratch' },
    {id: 106, name: 'TypeScript', author: 'Anders Hejlsberg', duration: 98, type: 'Premium',
      price: 699, ratings: 4.6, image: 'assets/TypeScript.png', description: 'Learn TypeScript from scratch' },
    {id: 107, name: 'Python', author: 'Guido van Rossum', duration: 98, type: 'Free',
      price: 0, ratings: 4.9, image: 'assets/Python.png', description: 'Learn Python from scratch' }
  ]

  getTotalCourses() {
    return this.courses.length;
  }
  getFreeCourses() {
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getPremiumCourses() {
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton = 'All';

  onFilterRadioButtonChange(data: string) {
    this.courseCountRadioButton = data;
    console.log(this.courseCountRadioButton);
  }
  searchText = '';
  onSearchTextChange(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
