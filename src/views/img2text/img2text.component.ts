import { Component, OnInit } from '@angular/core';
import { Img2textService } from 'src/services/img2text.service';

@Component({
  selector: 'app-img2text',
  templateUrl: './img2text.component.html',
  styleUrls: ['./img2text.component.scss'],
})
export class Img2textComponent implements OnInit {
  files: File[] = [];
  f: File;
  code: string;
  isLoading: boolean;

  constructor(private img2txtService: Img2textService) { }

  ngOnInit(): void {
    this.code = `
<pre>
      <code [innerHTML]="code"></code>
</pre>`;
  }

  onSelect(event) {
    console.log(event);
    if (this.files.length === 0) {
      this.files.push(...event.addedFiles);
      this.f = this.files[this.files.length - 1];
      console.log(this.f);
      console.log(this.files);
      this.img2txtService.getTextFromImage(this.f).subscribe((txt: string) => {
        this.code = txt;
      });

    }

  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    console.log(this.files.length);
    this.f = undefined;
  }
}
