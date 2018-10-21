import { Component, OnInit } from '@angular/core';
import {CardsService} from '../../core/services/cards.service';
import {Card} from '../../core/models/card';

function remove(item: Card, list: Card[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  todos: Card[] = [];
  dropzone1: Card[] = [];
  dropzone2: Card[] = [];
  dropzone3: Card[] = [];
  dropzone4: Card[] = [];
  currentCard?: Card;

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit() {
    this.getCards();
  }

  private getCards() {
    this.cardsService.getAllCards().subscribe(
      resp => {this.todos = <Card[]>resp; this.sortCards()}
    );
  }

  private sortCards(){
    let i = 0;
    for (const card of this.todos) {
      i++;
      if (card.completed){
        this.dropzone1.push(card);
      }
      if (!card.completed){
        this.dropzone4.push(card);
      }
      if (i > 20){
        break;
      }
    }
  }

  public move(card: Card, toList: Card[]): void {
    remove(card, this.dropzone1);
    remove(card, this.dropzone2);
    remove(card, this.dropzone3);
    remove(card, this.dropzone4);

    toList.push(card);
  }

}
