import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interface/user-request.interface';

@Injectable({providedIn: 'root'})
export class UserService {
  private http = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User>{
    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`).pipe(
      map(response => response.data),
      tap(console.log),
    )
  }
}
