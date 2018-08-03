import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { AnalyzedDocument } from '@app/shared/model/analyzed-document.model';
import { InMemoryDocumentService } from '@app/shared/services/in-memory-document.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'anms-analyzed-document-detail',
  templateUrl: './analyzed-document-detail.component.html',
  styleUrls: ['./analyzed-document-detail.component.scss']
})
export class AnalyzedDocumentDetailComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  analyzedDocument: AnalyzedDocument;

  constructor(private inMemoryDocumentService: InMemoryDocumentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAnalyzedDocument();
  }

  getAnalyzedDocument(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.analyzedDocument = this.inMemoryDocumentService.getAnalyzedDocument(id);
  }

  next(i: number): string {
    return this.analyzedDocument.sentences[i].text;
  }
}
