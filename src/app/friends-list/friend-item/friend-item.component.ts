import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../../models/friends';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss'],
})
export class FriendItemComponent implements OnInit {

  @Input() friend:Friend;

  constructor() { }

  ngOnInit() {}

}
