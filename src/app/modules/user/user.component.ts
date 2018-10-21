import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {User} from '../../core/models/user';
import {Card} from '../../core/models/card';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: ActivatedRoute, private userService: UserService) { }
  id: number;
  user: User;
  userCards: Card[];
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.getUser();
    this.getUserCards();
  }

  private getUser(){
    this.userService.getUserInfo(this.id).subscribe(
      res => this.user = <User>res
    )
  }
  private getUserCards(){
    this.userService.getUserCards(this.id).subscribe(
      res => this.userCards = <Card[]>res
    )
  }

}
