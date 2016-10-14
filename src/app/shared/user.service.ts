import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private user = {
      name: {
        first: 'Web',
        last: 'Dave'
      },
      address: {
        street: 'Roedingsmarkt 9',
        town: 'hamburg'
      },
      social: {
        twitter: '@webdave_de',
        github: 'web-dave'
      }
    };
  constructor() { }

  public getUser() {
    return this.user;
  }

}

export interface IUser {
   name: {
        first: string;
        last: string;
      };
      address: {
        street: string;
        town: string;
      };
      social: {
        twitter: string;
        github: string;
      }
}

