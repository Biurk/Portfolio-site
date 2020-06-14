import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/views/home/home.component';
import { Img2textComponent } from 'src/views/img2text/img2text.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AppThumbnailComponent } from 'src/components/app-thumbnail/app-thumbnail.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Img2textService } from 'src/services/img2text.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { SentimentAnalysisComponent } from 'src/views/sentiment-analysis/sentiment-analysis.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SentimentAnalysisService } from 'src/services/sentiment-analysis.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppThumbnailComponent,
    Img2textComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    NgxDropzoneModule, HttpClientModule, MatInputModule, MatButtonModule, FormsModule
  ],
  providers: [Img2textService, SentimentAnalysisService],
  bootstrap: [AppComponent],
})
export class AppModule { }
