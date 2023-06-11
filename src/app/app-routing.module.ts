import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { GridComponent } from './components/grid/grid.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'grid', component: GridComponent },
  { path: 'card', component: CardComponent },
  { path: 'image/:id', component: DataComponent },
  { path: '**', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
