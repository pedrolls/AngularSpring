import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return  this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),//first, fecha a conexao e depois de obter a resposta.
        delay(3000),//Delay para ver o spinner na página.
        tap(courses => console.log(courses))
      );
  }
}
