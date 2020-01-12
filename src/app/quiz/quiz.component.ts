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
  answer: string
  risposte: string[] = []
  i: number = 0
  message: string
  points: number = 0

  onSelect(risposta: string) {
    this.answer = risposta
    if (this.risposte[this.i] != this.answer) {
      this.risposte[this.i] = this.answer
    } else this.risposte.push(this.answer)
  }

  continue() {
    if (this.answer == this.quizzettone[this.i].rispCorretta) {
      this.message = "RISPOSTA CORRETTA"
      this.i += 1
      this.points += 1
    } else this.message = "RISPOSTA SBAGLIATA", this.i += 1
  }

  back() {
    if (this.i == 0) {
      this.i = 0
    } else this.i -= 1
  }

  constructor(private _quizService: QuizService) { }

  ngOnInit() {
    this._quizService.getQuizList().subscribe(
      (quizList: Quiz[]) => {
        this.quizzettone = quizList;
      }
    )
  }

}
