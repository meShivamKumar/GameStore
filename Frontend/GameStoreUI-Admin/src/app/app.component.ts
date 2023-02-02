import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { HealthService } from './services/health.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GameStoreUI';

  constructor(private healthService: HealthService) {}

  ngOnInit(): void {
    this.healthService.checkSession();
  }
}
