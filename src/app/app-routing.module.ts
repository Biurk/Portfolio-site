import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/views/home/home.component';
import { Img2textComponent } from 'src/views/img2text/img2text.component';
import { MyCvComponent } from 'src/views/my-cv/my-cv.component';
import { SourcesComponent } from 'src/views/sources/sources.component';
import { SentimentAnalysisComponent } from 'src/views/sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'img2text', component: Img2textComponent },
  { path: 'myCV', component: MyCvComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'sentimentAnalysis', component: SentimentAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
