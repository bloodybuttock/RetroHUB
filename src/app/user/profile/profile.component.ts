import { AuthService } from './../../shared/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  dataUser: any = {};

  profileform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(public authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.authService
      .getUserProfile(this.authService.get_userId())
      .subscribe((res) => {
        this.dataUser = res;
        console.log('berhasil sampe sini sih');
        console.log(res);
        console.log(this.dataUser.data.email);
      });

    // let id = this.route.snapshot.paramMap.get('_id');
    // this.authService.getUserProfile(id).subscribe((res) => {
    //   this.dataUser = res;
    //   this.profileform.setValue({
    //     firstName: res.firstName,
    //     lastName: res.lastName,
    //   });
    // });
  }
}
