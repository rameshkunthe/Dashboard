import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EmployeeService } from '../../services/employee/employee.service'
import { Employee } from '../../services/employee/index';

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
    constructor(private api: ApiService, private empservice: EmployeeService) { }

    ngOnInit() {
        this.empservice.getEmployees().subscribe(data => {
                this.rows = data;
            }, err => {
            });
  }

  onDelete(Id: number) {

    alert(Id);
  }

  onEdit(Id: number) {

    alert(Id);
  }

  onDetails(Id: number) {

    alert(Id);
  }


}
