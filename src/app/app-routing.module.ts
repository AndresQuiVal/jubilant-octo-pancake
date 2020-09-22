import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'friends-list',
    pathMatch: 'full'
  },
  {
    path: 'friends-list',
    children: [
        {
          path : '',
          loadChildren: () => import('./friends-list/friends-list.module').then( m => m.FriendsListPageModule)
        },
        {
          path: ':friendId',
          loadChildren: () => import('./friend-details/friend-details.module').then( m => m.FriendDetailsPageModule)
        }
    ]
  },
  {
    path: 'add-friend',
    loadChildren: () => import('./add-friend/add-friend.module').then( m => m.AddFriendPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
