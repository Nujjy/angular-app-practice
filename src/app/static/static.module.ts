import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from '@app/static/static-routing.module';
import { AboutComponent } from '@app/static/about/about.component';
import { AnalyzedDocumentComponent } from '@app/static/analyzed-document/analyzed-document.component';
import { AnalyzedDocumentDetailComponent } from '@app/static/analyzed-document-detail/analyzed-document-detail.component';
import { InMemoryDocumentService } from '@app/shared/services/in-memory-document.service';
import { UploadComponent } from '@app/static/upload/upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { StoreModule } from '@ngrx/store';
import { analyzedDocuments } from '@app/static/analyzed-document/analyzed-document.reducer';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
    FileUploadModule,
],
  declarations: [AboutComponent, AnalyzedDocumentComponent, AnalyzedDocumentDetailComponent, UploadComponent],
  providers: []
})
export class StaticModule {}
