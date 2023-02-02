import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from'@angular/common/http'
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TopChartComponent } from './top-chart/top-chart.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { PopularComponent } from './popular/popular.component';
import { QueriesComponent } from './queries/queries.component';
import { RaiseQueryComponent } from './queries/raise-query/raise-query.component';
import { ProfileComponent } from './profile/profile.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { TopfreeComponent } from './topfree/topfree.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UserComponent,
    TopChartComponent,
    RecommendedComponent,
    PopularComponent,
    QueriesComponent,
    RaiseQueryComponent,
    ProfileComponent,
    TopNavComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    TopfreeComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule,
  HttpClientModule,NgxPaginationModule],
})
export class UserModule {}
