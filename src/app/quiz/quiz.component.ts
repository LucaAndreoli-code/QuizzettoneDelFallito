import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QUIZ } from '../mock-quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzettone: Quiz[] = QUIZ
  answer: string
  risposte: string[] = []
  i: number = 0
  message: string
  points: number = 0

  onSelect(risposta: string){
    this.answer = risposta
    if(this.risposte[this.i] != this.answer){
      this.risposte[this.i] = this.answer
    }else this.risposte.push(this.answer)
  }

  checkAnswer(){
    if(this.answer == this.quizzettone[this.i].rispCorretta){
      this.message = "RISPOSTA CORRETTA"
      this.i += 1
      this.points += 1
    }else this.message = "RISPOSTA SBAGLIATA", this.i += 1
  }


  constructor() { }

  ngOnInit() {
    
  }

}
