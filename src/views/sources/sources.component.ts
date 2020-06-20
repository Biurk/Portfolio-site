import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  public sourcesData: any[] = [
    ['ce site', '_Lien_https://github.com/Biurk/Portfolio-site'],
    ['sentimentAnalysis API+model', '_Lien_https://github.com/Biurk/api-sentimentAnalysis'],
    ['img2text API+model', '_Lien_']];
  public sourcesColumns: string[] = ['Projet', 'sources'];

  constructor() { }

  ngOnInit(): void {
  }

}
