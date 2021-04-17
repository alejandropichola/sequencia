import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageSequenceComponent } from '@components/page-sequence/page-sequence.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sequence',
    pathMatch: 'full'
  },
  {
    path: 'sequence', component: PageSequenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
