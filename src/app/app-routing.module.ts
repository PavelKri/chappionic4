import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


/**
 * const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'enter-code', loadChildren: () => import('./enter-code/enter-code.module').then(m => m.EnterCodePageModule) },
  { path: 'conversation', loadChildren: () => import('./conversation/conversation.module').then(m => m.ConversationPageModule) }
];
 */

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'enter-code', loadChildren: () => import('./enter-code/enter-code.module').then(m => m.EnterCodePageModule) },
  { path: 'conversation', loadChildren: () => import('./conversation/conversation.module').then(m => m.ConversationPageModule) },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
