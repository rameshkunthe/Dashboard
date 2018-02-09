import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {

  constructor(private api: ApiService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
        this.auth.logout();
        this.router.navigate(['/login']);
  }
}
