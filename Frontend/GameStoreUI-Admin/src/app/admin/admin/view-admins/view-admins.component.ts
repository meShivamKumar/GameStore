import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.scss'],
})
export class ViewAdminsComponent implements OnInit {
  data: any[] = [];
  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.data = this.routes.snapshot.data['adminList'];
  }

  getAdmin() {
    this.adminService.getAdmins().subscribe((res) => {
      this.data = res;
    });
  }
  addAdmin() {
    this.router.navigate(['admin/add-admins']);
  }

  deleteAdmin(email: string) {
    this.adminService.deleteAdmin(email).subscribe((res) => {
      if (res == 400) {
        alert("This Admin can't be deleted");
      }
      this.getAdmin();
    });
  }
}
