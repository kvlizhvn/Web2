import {Component, OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  logged = false;
  username = '';
  password = '';
  constructor(private categoryService: CategoriesService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  login() {
    this.categoryService.login(this.username, this.password).subscribe((data) => {
        localStorage.setItem('token', data.token);
        this.logged = true;
        this.username = '';
        this.password = '';
    });
  }
  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
}
