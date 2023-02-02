import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewAdminsComponent } from './view-admins/view-admins.component';

import { GamesComponent } from './games/games.component';
import { ViewDetailComponent } from './view-users/view-detail/view-detail.component';
import { QueryComponent } from './query/query.component';
import { ViewQueryComponent } from './view-query/view-query.component';
import { AddAdminComponent } from './view-admins/add-admin/add-admin.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { AddComponent } from './games/add/add.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './games/edit/edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    ViewUsersComponent,
    ViewAdminsComponent,
    GamesComponent,
    AddComponent,
    ViewDetailComponent,
    QueryComponent,
    ViewQueryComponent,
    AddAdminComponent,
    GameDetailComponent,
    ChangePasswordComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class AdminModule {}
