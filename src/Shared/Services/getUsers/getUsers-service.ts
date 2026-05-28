import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  private api: string = 'https://jsonplaceholder.typicode.com/users';

  protected http = inject(HttpClient);

  getUsers(): Observable<any> {
    // console.log('GetUsersService has been called');
    return this.http.get(this.api);
  }
}
