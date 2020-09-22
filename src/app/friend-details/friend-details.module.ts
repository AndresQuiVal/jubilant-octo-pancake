import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendDetailsPageRoutingModule } from './friend-details-routing.module';

import { FriendDetailsPage } from './friend-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendDetailsPageRoutingModule
  ],
  declarations: [FriendDetailsPage]
})
export class FriendDetailsPageModule {}
