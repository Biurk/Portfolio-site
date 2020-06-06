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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppThumbnailComponent,
    Img2textComponent,
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
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
