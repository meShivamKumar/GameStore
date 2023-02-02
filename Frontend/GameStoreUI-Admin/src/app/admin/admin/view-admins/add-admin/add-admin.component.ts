import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  data: any = {};
  constructor(private adminService: AdminService, private router: Router) {}
  ngOnInit(): void {
    this.data = {};
  }

  back() {
    this.router.navigate(['admin/admins']);
  }

  addAdmin() {
    this.adminService.addAdmin(this.data).subscribe((res) => {
      this.data = {};
      console.log(res);
    });
  }
}
