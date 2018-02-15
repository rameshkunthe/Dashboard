import { Injectable } from '@angular/core';
import {Employee} from './index';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { ApiService } from '../../services/api.service';
import {Http, Response, RequestOptions, Headers} from '@angular/http';


@Injectable()
export class EmployeeService {

    constructor(private api: ApiService) { }

    //5. Function to return the Observable response containing all Employees
    getEmployees() : Observable<Employee[]> {
         return this.api.get('Employee');
        
    }

    getEmployee(id: string) : Observable<Employee>{
        var employee;
        employee = this.api.get('Employee' + `/` + id);
        return employee;
    }
    //6. Function to perform POST operation to create a new employee
    addEmployee(emp: Employee): Observable<boolean> {
        return this.api.post('Employee', emp);
    }
    //7. Function to update Employee using PUT operation
    updateEmployee(emp: Employee): Observable<boolean> {
        return this.api.put('Employee', emp);
    }
    //8. Function to remove the Employee using DELETE operation
    deleteEmployee(id: string): Observable<boolean> {
       return this.api.delete('Employee' + `/` + id);
    }

}
