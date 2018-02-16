import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service'
import { Employee } from '../../services/employee/index';

@Component({
  selector: 'app-detailsemployee',
  templateUrl: './detailsemployee.component.html',
  styleUrls: ['./detailsemployee.component.css']
})
export class DetailsemployeeComponent implements OnInit {
  employee: Employee;
  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
    this.employee = this.empservice.selectedEmployee;
  }

}
