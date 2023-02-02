import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  data: any = ([] = []);

  constructor(private router: Router, private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.routes.snapshot.data['profile'];
  }

  viewGame(gameId: string) {
    this.router.navigate(['user/game-detail'], {
      queryParams: { gameId: gameId },
    });
  }
}
