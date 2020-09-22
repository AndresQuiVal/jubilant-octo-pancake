import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsListPageRoutingModule } from './friends-list-routing.module';

import { FriendsListPage } from './friends-list.page';
import { FriendItemComponent } from './friend-item/friend-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsListPageRoutingModule,
  ],
  declarations: [FriendsListPage, FriendItemComponent]
})
export class FriendsListPageModule {}
