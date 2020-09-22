import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { FriendsServiceService } from '../services/friends-service.service';
import { Guid } from "guid-typescript";
import { Friend } from '../models/friends';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

  friendName:string;
  friendPriority:string;

  constructor(
    private router:Router, 
    private alert:AlertController, 
    private friendsService:FriendsServiceService) { 
  }

  ngOnInit() {
  }

  addFriend() {

    if (this.friendName == undefined || this.friendPriority == undefined) {
      return;
    }

    this.friendsService.addFriend(
      new Friend(Guid.create().toString(), this.friendName, this.friendPriority, []));

    this.alert.create({
      header: "Friend added!",
      message: `${this.friendName} added with ${this.friendPriority} priority onto your friend's list!`,
      buttons: ["Okay"]
    }).then(alertObj => alertObj.present())

    this.router.navigate(['/friends-list']);
  }

}
