import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MettingComponent } from './metting/metting.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = 
[{ path: 'metting', component: MettingComponent },
{ path: 'exercices', component: ExercicesComponent },
{ path: 'home', component: HomeComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
