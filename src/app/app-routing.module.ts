import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RepositoryPageComponent } from './repository-page/repository-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'serch-user'
  }, {
    path: 'serch-user',
    component: ProfilePageComponent
  }, {
    path: 'serch-user/:repoId/repo',
    component: RepositoryPageComponent,
    data: {
      kek: 'lol'
    }
  }, {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
