import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SequenceComponent } from '@components/sequence/sequence.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sequence',
    pathMatch: 'full'
  },
  {
    path: 'sequence', component: SequenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
