import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-employee',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  title: string = "Create Employee Form"
  newEmployee: Employee = new Employee();
  active: boolean = true;
  @Output() employeeCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // emit the event indicating that user is created
    this.employeeCreated.emit({ employee: this.newEmployee });
    console.log('Form submission is done');
    this.newEmployee = new Employee();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
