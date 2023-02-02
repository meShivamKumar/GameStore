import { Router } from '@angular/router';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  currentPass: string = '';
  enteredPass: string = '';
  email: string = '';
  data: any = {};
  constructor(
    private GlobalService: GlobalService,
    private adminService: AdminService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.email = this.GlobalService.getEmail();
    this.currentPass = this.GlobalService.getPassword();
  }

  changePassword() {
    if (this.enteredPass === this.currentPass) {
      this.adminService
        .changePassword(this.email, this.data)
        .subscribe((res) => {
          alert('Password Changed Successfully!');
          this.router.navigate(['admin/admins']);
        });
    } else {
      alert('Current Password is Incorrect!');
    }
  }
}
