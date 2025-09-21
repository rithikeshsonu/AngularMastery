import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {name: "iPhone 14 Pro", price: 999, description: "Latest iPhone model with advanced features.", image : "assets/LinkedInBanner.png"},
    {name: "Samsung Galaxy S23", price: 899, description: "Flagship Samsung phone with excellent camera.", image : "assets/LinkedInBanner.png"},
    {name: "Google Pixel 7", price: 799, description: "Google's own phone with pure Android experience.", image : "assets/LinkedInBanner.png"},
    {name: "OnePlus 11", price: 699, description: "High-performance phone with fast charging.", image : "assets/LinkedInBanner.png"},
    {name: "Sony WH-1000XM5", price: 349, description: "Top-tier noise-cancelling headphones.", image : "assets/LinkedInBanner.png"},
    {name: "Apple MacBook Pro", price: 1299, description: "Powerful laptop for professionals.", image : "assets/LinkedInBanner.png"},
    {name: "Dell XPS 13", price: 999, description: "Compact and high-performance ultrabook.", image : "assets/LinkedInBanner.png"},
    // {name: "iPad Pro", price: 799, description: "Versatile tablet with powerful performance."},
    // {name: "Amazon Echo Dot", price: 49, description: "Smart speaker with Alexa voice assistant."},
    ]
}
