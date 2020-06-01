import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/views/home/home/home.component';
import { Img2textComponent } from 'src/views/img2text/img2text/img2text.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'img2text', component: Img2textComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
