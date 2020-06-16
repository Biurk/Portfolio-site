import { Component, OnInit, ViewChild } from '@angular/core';
import { SentimentAnalysisService } from 'src/services/sentiment-analysis.service';
import { SentimentResponse } from 'src/interfaces/sentiment-interfaces';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {

  myTextArea: string;
  score: number;
  isLoading: boolean;

  constructor(private sentimentAnalysisService: SentimentAnalysisService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.score = -1;
  }

  public evaluate(txt: string) {
    this.isLoading = true;
    this.sentimentAnalysisService.getScoreFromText(txt).subscribe((response: SentimentResponse) => {
      this.score = 10 * response.predictions[0][0];
      this.isLoading = false;
    });
  }

}
