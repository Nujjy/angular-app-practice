import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '@app/static/about/about.component';
import { AnalyzedDocumentComponent } from '@app/static/analyzed-document/analyzed-document.component';
import { AnalyzedDocumentDetailComponent } from '@app/static/analyzed-document-detail/analyzed-document-detail.component';
import { UploadComponent } from '@app/static/upload/upload.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'analyzed-document',
    component: AnalyzedDocumentComponent,
    data: { title: 'anms.menu.analyzed-document' }
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: { title: 'anms.menu.upload' }
  },
  {
    path: 'analyzed-document-detail/:id',
    component: AnalyzedDocumentDetailComponent,
    data: { title: 'anms.menu.document-analysis' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
