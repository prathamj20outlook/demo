import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayFormComponent } from './display-form/display-form.component';
const routes: Routes = [

  {path:'',component:DisplayFormComponent},
  // {path:'display-data',component:DisplayDataComponent},
  {path:'display-form/:id',component: DisplayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
