import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule),  },
  
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  
{ path: 'destination', loadChildren: () => import('./destination/destination.module').then(m => m.DestinationModule) },

  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), },

  { path: 'auth', component: AuthComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
