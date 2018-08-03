export interface AnalyzedDocumentStore {
    analyzedDocuments: Array<AnalyzedDocument>;
}

export class AnalyzedDocument {
    id: number;
    sentences: Array<AnalyzedSentence>;
}

export class AnalyzedSentence {
    id: number;
    text: string;
    classes: Array<Number>;
}
