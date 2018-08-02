export class ClassifiedSentence {
    id: number;
    text: string;
    classes: Array<Number>;
}

export class AnalyzedDocument {

    constructor(sentences) {
        this.sentences = sentences;
    }
    sentences: Array<ClassifiedSentence>;
}
