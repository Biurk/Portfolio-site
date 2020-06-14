import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  constructor(private http: HttpClient) { }

  /** send the text to the model, retrieve and return the resulting score  */
  public getScoreFromText(text: string): Observable<string> {

    console.log(environment.sentimentAnalysisUrl);
    return this.http.post<string>(environment.sentimentAnalysisUrl + '/lol/mdr', { phrase: text });
    return this.http.post<string>(environment.sentimentAnalysisUrl, text);
  }
}
