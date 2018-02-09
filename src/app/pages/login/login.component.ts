import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  constructor(private api: ApiService,
    private auth: AuthService,
    private router: Router) { }

    ngOnInit() {
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['/dashboard']);
      }
    }
  
    onSubmit(form: NgForm) {
      const values = form.value;
      
      const payload = {
        "Id": 0,
        Username: values.username,
        Password: values.password
      };
  
      this.api.post('User/Login', payload)
        .subscribe(data => {
          this.show = false;
          this.auth.setToken(data.token);
          this.router.navigate(['/dashboard']);
        }, err => {
          this.show = true;
          form.reset();
        });
    }



}
