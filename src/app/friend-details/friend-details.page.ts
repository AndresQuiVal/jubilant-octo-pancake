import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Friend } from '../models/friends';
import { FriendsServiceService } from '../services/friends-service.service';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.page.html',
  styleUrls: ['./friend-details.page.scss'],
})
export class FriendDetailsPage implements OnInit {

  friend:Friend;

  constructor(
    private router:Router,
     private actRoute:ActivatedRoute, 
     private friendsService:FriendsServiceService,
     private alert:AlertController) { }

  ngOnInit() {
    this.actRoute.paramMap
      .subscribe(paramMap => {
        if (!paramMap.has("friendId"))
          return;
        
        const friendId = paramMap.get("friendId");
        this.friend = this.friendsService.getFriendById(friendId);
      } );
  }

  public deleteFriend():void {

    this.alert.create(
      {
        header: "Remove friend?",
        message: `Do you want to remove ${this.friend.name} friend?`,
        buttons: [
          {
            text: "Cancel",
            role: "cancel"
          },
          {
            text: "Remove",
            handler: () => {
              this.friendsService.removeFriend(this.friend.id);
              this.router.navigate(["/friends-list"]);
            }
          }
        ]

      }
    ).then(e => e.present());
  }

}
