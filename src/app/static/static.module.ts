import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from '@app/static/static-routing.module';
import { AboutComponent } from '@app/static/about/about.component';
import { FeaturesComponent } from '@app/static/features/features.component';
import { DocumentAnalysisComponent } from '@app/static/document-analysis/document-analysis.component';
import { SentenceComponent } from '@app/shared/sentence/sentence-component';
import { InMemoryDataService } from '@app/static/document-analysis/in-memory-data.service';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, FeaturesComponent, DocumentAnalysisComponent, SentenceComponent],
  providers: [InMemoryDataService]
})
export class StaticModule {}
