import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendDetailsPage } from './friend-details.page';

const routes: Routes = [
  {
    path: '',
    component: FriendDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendDetailsPageRoutingModule {}
