import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
    columns = [
        { prop: 'Id' },
        { prop: 'FirstName' },
        { prop: 'LasttName' },
        { prop: 'Salary' },
        { prop: 'City' }

    ];

    rows = [];
    constructor(private api: ApiService) { }

    ngOnInit() {
    

        this.api.get('Employee')
            .subscribe(data => {
                this.rows = data;

            }, err => {
                
            });
  }

}
