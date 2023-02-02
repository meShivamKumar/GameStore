import { HealthService } from './services/health.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GameStoreUI-User';
  constructor(private HealthService: HealthService) {}
  ngOnInit() {
    this.HealthService.checkUser();
  }
}
