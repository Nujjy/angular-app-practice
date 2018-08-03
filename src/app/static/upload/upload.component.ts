import { Component, OnInit} from '@angular/core';
import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import {FileUploader, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import { InMemoryDocumentService } from '@app/shared/services/in-memory-document.service';

// TODO: Point to microservice
const URL = 'http://127.0.0.1:5000/uploader';

@Component({
  selector: 'anms-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;

  constructor(private inMemoryDocumentService: InMemoryDocumentService) {}

  ngOnInit(): void {
    this.uploader = new FileUploader({url: URL});
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
}

onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  const resp = JSON.parse(response);
  // TODO: You may need to manipulate the JSON when adding into the in-memory-document-service
  this.inMemoryDocumentService.addAnalyzedDocument(resp.sentences);
}

onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  if (response) {
      const error = JSON.parse(response); // error server response
    }
    console.log('error');
}

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
