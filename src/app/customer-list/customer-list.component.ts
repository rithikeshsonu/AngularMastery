import { Component } from '@angular/core';
import { Customer } from './customer';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  selectedCustomer: any;
  customers: Customer [] = [
    {customerNo: 101, Name: 'Rithikesh', Address: '123 Main St', City: 'New York', Country: 'USA'},
    {customerNo: 102, Name: 'Alice', Address: '456 Oak Ave', City: 'Los Angeles', Country: 'USA'},
    {customerNo: 103, Name: 'Bob', Address: '789 Pine Rd', City: 'Chicago', Country: 'USA'},
    {customerNo: 104, Name: 'Charlie', Address: '321 Maple Dr', City: 'Houston', Country: 'USA'},
    {customerNo: 105, Name: 'Eve', Address: '654 Cedar Ln', City: 'Phoenix', Country: 'USA'}
  ];
}
