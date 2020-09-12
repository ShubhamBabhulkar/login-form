import { SigninComponent } from './components/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDashboarComponent } from './components/news-dashboar/news-dashboar.component';


const routes: Routes = [
 { path: '', component: NewsDashboarComponent},
 { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
