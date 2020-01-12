import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from './quiz';
import { QUIZ } from './mock-quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizList(): Observable<Quiz[]>{
    return of(QUIZ)
  }


}
