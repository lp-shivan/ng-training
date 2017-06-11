import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title: string = "Employee Details"
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
