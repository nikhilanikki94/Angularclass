import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
         {path:'',component:SessionComponent},
        {path:'home',component:HomeComponent}
    
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
