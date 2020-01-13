import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzettone: Quiz[] = []
  risposte: string[] = []
  answer: string
  i: number = 0
  points: number = 0

  onSelect(risposta: string) {
    this.answer = risposta
    this.risposte[this.i] = risposta
  }

  continue() {
    this.i += 1
    console.log(this.risposte)
  }

  back() {
    if (this.i == 0) {
      this.i = 0
    } else this.i -= 1
  }

  checkAnswer(){
    let j: number;
    for(j = 0; j < this.risposte.length; j++){
      if(this.risposte[j] == this.quizzettone[j].rispCorretta){
        this.points += 1
      }
    }
  }

  constructor(private _quizService: QuizService) { }

  ngOnInit() {
    this._quizService.getQuizList().subscribe(
      (quizList: Quiz[]) => {
        this.quizzettone = quizList;
      }
    )
    this.risposte.length = this.quizzettone.length
  }

}
