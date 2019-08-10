import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubFinderService {
  authData: string;

  constructor() {
    this.authData = `client_id=${ environment.CLIENT_ID }&client_secret=${ environment.CLIENT_SECRET }`;
  }

  getUser(userName: string): Promise<IUser> {
    return fetch(`https://api.github.com/users/${ userName }?${ this.authData }`)
    .then((response) => {
      if (!response.ok) {
        throw(response.statusText);
      }

      return response.json();
    });
  }
}
