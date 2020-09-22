import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friends';
import { FriendsServiceService } from '../services/friends-service.service'

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.page.html',
  styleUrls: ['./friends-list.page.scss'],
})
export class FriendsListPage implements OnInit {

  friendsList:Friend[];

  constructor(public friendsService:FriendsServiceService) { }

  ngOnInit() {
    this.friendsList = this.friendsService.getFriends();
  }

}
