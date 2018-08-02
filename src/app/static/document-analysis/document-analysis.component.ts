import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { SentenceClassificationService } from '@app/shared/services/classification.service';
import { AnalyzedDocument } from '@app/shared/model/classification.model';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'anms-document-analysis',
  templateUrl: './document-analysis.component.html',
  styleUrls: ['./document-analysis.component.scss']
})
export class DocumentAnalysisComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  document: AnalyzedDocument;

  constructor(private sentenceClassificationService: InMemoryDataService) {}

  ngOnInit() {
    this.document = new AnalyzedDocument(this.sentenceClassificationService.createDb().sentences);
    console.log(this.document);
  }

  next(i: number): string {
    return this.document.sentences[i].text;
  }
}
