import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailService } from 'src/app/resolvers/game-detail.service';
import { GameListService } from 'src/app/resolvers/game-list.service';
import { ProfileService } from 'src/app/resolvers/profile.service';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { QueriesComponent } from './queries/queries.component';
import { RaiseQueryComponent } from './queries/raise-query/raise-query.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'game-detail',
        component: GameDetailComponent,
        resolve: { gameDetail: GameDetailService },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
      },
      {
        path: 'game-list',
        component: GameListComponent,
      },
      { path: 'query', component: QueriesComponent },
      { path: 'raise-query', component: RaiseQueryComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        resolve: { profile: ProfileService },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
