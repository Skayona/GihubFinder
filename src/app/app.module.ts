import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserRepoItemComponent } from './user-repo-item/user-repo-item.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RepositoryPageComponent } from './repository-page/repository-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    UserSearchComponent,
    UserInfoComponent,
    UserRepositoriesComponent,
    UserRepoItemComponent,
    NotFoundPageComponent,
    RepositoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
