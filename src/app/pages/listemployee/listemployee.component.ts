import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EmployeeService } from '../../services/employee/employee.service'
import { Employee } from '../../services/employee/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
    columns = [
        { prop: 'Id' },
        { prop: 'FirstName' },
        { prop: 'LastName' },
        { prop: 'Salary' },
        { prop: 'City' }

    ];

    rows = [];
    constructor(private api: ApiService, private empservice: EmployeeService,
      private router: Router) { }

    ngOnInit() {
        this.empservice.getEmployees().subscribe(data => {
                this.rows = data;
                this.empservice.listEmployee = data;
            }, err => {
            });
  }

  onDelete(Id: number) {
    this.router.navigate(['/dashboard']);
    
  }

  onEdit(Id: number) {
    this.empservice.selectedEmployee = this.empservice.listEmployee.find(e=> e.Id == Id);
    this.router.navigate(['dashboard/edit-employee']);
  }

  onDetails(Id: number) {
    this.empservice.selectedEmployee = this.empservice.listEmployee.find(e=> e.Id == Id);
    this.router.navigate(['/dashboard/details-employee']);
  }


}
