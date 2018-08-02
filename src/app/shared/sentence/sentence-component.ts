import { Component, OnInit, Input } from '@angular/core';
import { Sentence } from '@app/shared/sentence/sentence.model';

@Component({
  selector: 'sentence-component',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit {
  @Input() sentence: Sentence;

  ngOnInit() {
    console.log(this.sentence);
  }
}
