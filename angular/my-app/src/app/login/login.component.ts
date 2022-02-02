import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../categories.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }

  constructor(private categoryService: CategoriesService) {
  }

  login() {
    this.categoryService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.username = '';
      this.password = '';
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

}
