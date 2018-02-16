import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service'
import { Employee } from '../../services/employee/index';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employee: Employee;
  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
    this.employee = this.empservice.selectedEmployee;
  }

}
