import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListResolverService } from 'src/app/resolvers/admin-list-resolver.service';
import { EditGameResolverService } from 'src/app/resolvers/edit-game-resolver.service';
import { GameListResolverService } from 'src/app/resolvers/game-list-resolver.service';
import { GameResolverService } from 'src/app/resolvers/game-resolver.service';
import { QueryDetailResolverService } from 'src/app/resolvers/query-detail-resolver.service';
import { QueryListResolverService } from 'src/app/resolvers/query-list-resolver.service';
import { UserDetailResolverService } from 'src/app/resolvers/user-detail-resolver.service';
import { UserListResolverService } from 'src/app/resolvers/user-list-resolver.service';
import { AdminComponent } from './admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddComponent } from './games/add/add.component';
import { EditComponent } from './games/edit/edit.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

import { GamesComponent } from './games/games.component';
import { QueryComponent } from './query/query.component';
import { AddAdminComponent } from './view-admins/add-admin/add-admin.component';
import { ViewAdminsComponent } from './view-admins/view-admins.component';
import { ViewQueryComponent } from './view-query/view-query.component';
import { ViewDetailComponent } from './view-users/view-detail/view-detail.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },

      {
        path: 'users',
        component: ViewUsersComponent,
        resolve: { userList: UserListResolverService },
      },
      {
        path: 'viewUser',
        component: ViewDetailComponent,
        resolve: { userDetail: UserDetailResolverService },
      },
      {
        path: 'games',
        component: GamesComponent,
        resolve: { gameList: GameListResolverService },
      },
      {
        path: 'game-detail',
        component: GameDetailComponent,
        resolve: { data: GameResolverService },
      },
      {
        path: 'add-game',
        component: AddComponent,
      },
      {
        path: 'edit-game/:id',
        component: EditComponent,
        resolve: { gameDetail: EditGameResolverService },
      },
      {
        path: 'query',
        component: QueryComponent,
        resolve: { queryData: QueryListResolverService },
      },
      {
        path: 'view-query',
        component: ViewQueryComponent,
        resolve: { queryDetail: QueryDetailResolverService },
      },
      {
        path: 'admins',
        component: ViewAdminsComponent,
        resolve: { adminList: AdminListResolverService },
      },
      {
        path: 'add-admins',
        component: AddAdminComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
