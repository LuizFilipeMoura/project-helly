import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeciosionMakerComponent} from "./components/deciosion-maker/deciosion-maker.component";
import {ChatWindowComponent} from "./components/chat-window/chat-window.component";

const routes: Routes = [
  // { path: '', redirectTo: 'home/list-apontamento-uso', pathMatch: 'full' },
  {
    path: 'maker',
    component: DeciosionMakerComponent,
  },
  {
    path: '',
    component: ChatWindowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
