import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/pages.module').then(m => m.PagesModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule) 
  },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
