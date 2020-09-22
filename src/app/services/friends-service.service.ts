import { Injectable } from '@angular/core';
import { Friend } from '../models/friends'; 

@Injectable({
  providedIn: 'root'
})
export class FriendsServiceService {

  private friends:Friend[] = [
    new Friend("1", "Andres", "High", [ new Friend("6", "Edu", "High", []) ]),
    new Friend("2", "Roger", "Low", [ new Friend("1", "Andres", "High", []), new Friend("2", "Gera", "Low", []) ]),
    new Friend("3", "Federick", "Medium", []),
    new Friend("4", "Lukas", "Medium", [ new Friend("5", "Mieen", "Medium", []) ])
  ]

  constructor() { }

  public getFriends():Friend[] {
    return this.friends;
  }

   public getFriendById(id:string):Friend {
     return this.friends.find(e => e.id === id);
  }

  public addFriend(friend:Friend):void {
    this.friends.push(friend);
  }

  public removeFriend(id:string){
    this.friends = this.friends.filter(
      e => e.id != id
    )
  }
}
