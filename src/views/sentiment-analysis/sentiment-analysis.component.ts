import { Component, OnInit } from '@angular/core';
import { SentimentAnalysisService } from 'src/services/sentiment-analysis.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {

  myTextArea: string;
  score: string;

  constructor(private sentimentAnalysisService: SentimentAnalysisService) { }

  ngOnInit(): void {
  }

  public evaluate(txt: string) {
    console.log('ow' + txt);
    this.sentimentAnalysisService.getScoreFromText(txt).subscribe((score: string) => {
      this.score = score;
      console.log(score);
    });
  }

  public test(event) {
    console.log(this.myTextArea);
    console.log(event);
  }

}
