import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Characters } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public nameCharacter = signal<string>('');
  public species = signal<string>('');
  public status = signal<string>('');
  private baseUrl: string = 'https://rickandmortyapi.com/api/character'


  constructor( private http: HttpClient ) { }

  public loadPage(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.baseUrl).
    pipe(
      map((res: any) => res.results )
    )
  }

}
