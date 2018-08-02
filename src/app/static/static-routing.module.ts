import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '@app/static/about/about.component';
import { FeaturesComponent } from '@app/static/features/features.component';
import { DocumentAnalysisComponent } from '@app/static/document-analysis/document-analysis.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'anms.menu.features' }
  },
  {
    path: 'document-analysis',
    component: DocumentAnalysisComponent,
    data: { title: 'anms.menu.document-analysis' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
