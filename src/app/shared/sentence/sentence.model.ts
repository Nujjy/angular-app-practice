export interface Document {
    id: number;
    sentences: Array<Sentence>;
}


export interface Sentence {
    id: number;
    text: string;
    last: Array<Number>;
}
