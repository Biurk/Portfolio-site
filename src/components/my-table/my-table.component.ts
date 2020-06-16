import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  @Input() headers: string[];
  @Input() datas: string[][];
  constructor() { }

  ngOnInit(): void {
  }

  public goToLink(url: string) {
    window.open(url, '_blank');
  }


}
