import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AnalyzedDocument } from '@app/shared/model/classification.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SentenceClassificationService {

  constructor(private httpClient: HttpClient) {}

    url = 'api/sentences';
    /*
    retrieveStock(symbol: string): Observable<Sentence> {
        return this.httpClient
          .get(PROXY_URL + `https://api.iextrading.com/1.0/stock/${symbol}/quote`)
          .pipe(
            map((stock: any) => ({
              symbol: stock.symbol,
              exchange: stock.primaryExchange,
              last: stock.latestPrice,
              ccy: 'USD',
              change: stock.close,
              changePositive: stock.change.toString().indexOf('+') === 0,
              changeNegative: stock.change.toString().indexOf('-') === 0,
              changePercent: stock.changePercent.toFixed(2)
            }))
          );
      }
      */
    classifySentences(): Observable<AnalyzedDocument> {
        // const url = 'url';
        // const headers = new Headers();
        // headers.append('Accept', 'application/sparql-results+json');
        // const options = new RequestOptions({ headers: headers });
        return this.httpClient.get(this.url).pipe(
            map((response: any) => response)
        );
    }
}


