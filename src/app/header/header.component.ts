import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService // private homeService: HomeService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }

  iseng() {
    console.log('iseng coba');
  }
  // getUsername() {
  //   this.authService.
  //   console.log('getuser jalan');
  // }
}
