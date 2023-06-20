import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules').then((m) => m.HomeModule) },
  { path: 'products/:id', loadChildren: () => import('./modules').then((m) => m.ListProductModule) },
  { path: 'register', loadChildren: ()=> import('./modules').then((m) => m.RegisterModule) },
  { path: 'login', loadChildren: ()=> import('./modules').then((m) => m.LoginModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
