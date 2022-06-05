import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'home',component:LoginComponent
  },
  // {
  //   path:'content',loadChildren:()=>import('./reader/reader.module').then(m=>m.ReaderModule)
  // },
  {
    path:'blog',loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'superadmin',loadChildren:()=>import('./super-admin/super-admin.module').then(m=>m.SuperAdminModule)
  },
  {
    path: "**", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
