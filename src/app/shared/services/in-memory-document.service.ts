import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import { AnalyzedDocumentStore } from '@app/shared/model/analyzed-document.model';
import { AnalyzedDocument, AnalyzedSentence } from '@app/shared/model/analyzed-document.model';

@Injectable()
export class InMemoryDocumentService {
    analyzedDocuments: Array<AnalyzedDocument>;
    lastId = 0;

    constructor(private store: Store<AnalyzedDocumentStore>) {
        store.select('analyzedDocuments').subscribe(documents => {
              this.analyzedDocuments = documents;
            });
    }

    addAnalyzedDocument(analyzedSentences: Array<AnalyzedSentence>): void {
        this.store.dispatch({
            type: 'ADD_ANALYZED_DOCUMENT',
            payload: {
              id: ++this.lastId,
              sentences: analyzedSentences
            }
          });
    }

    getAnalyzedDocument(id: number): AnalyzedDocument {
        console.log(this.analyzedDocuments);
        return this.analyzedDocuments.find(x => x.id === id);
    }
}
