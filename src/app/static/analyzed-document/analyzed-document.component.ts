import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { Component, OnInit } from '@angular/core';

import { AnalyzedDocument } from '@app/shared/model/analyzed-document.model';
import { InMemoryDocumentService } from '@app/shared/services/in-memory-document.service';

import {Store} from '@ngrx/store';

@Component({
  selector: 'anms-analyzed-document',
  templateUrl: './analyzed-document.component.html',
  styleUrls: ['./analyzed-document.component.scss']
})
export class AnalyzedDocumentComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  analyzedDocuments: Array<AnalyzedDocument>;

  constructor(private inMemoryDocumentService: InMemoryDocumentService) {
    this.analyzedDocuments = this.inMemoryDocumentService.analyzedDocuments;
  }

  ngOnInit() {}
}

