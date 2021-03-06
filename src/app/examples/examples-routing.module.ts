import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/core';

import { ExamplesComponent } from '@app/examples/examples/examples.component';
import { TodosComponent } from '@app/examples/todos/todos.component';
import { StockMarketComponent } from '@app/examples/stock-market/stock-market.component';
import { ParentComponent } from '@app/examples/theming/parent/parent.component';
import { AuthenticatedComponent } from '@app/examples/authenticated/authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosComponent,
        data: { title: 'anms.examples.menu.todos' }
      },
      {
        path: 'stock-market',
        component: StockMarketComponent,
        data: { title: 'anms.examples.menu.stocks' }
      },
      {
        path: 'theming',
        component: ParentComponent,
        data: { title: 'anms.examples.menu.theming' }
      },
      {
        path: 'authenticated',
        component: AuthenticatedComponent,
        canActivate: [AuthGuardService],
        data: { title: 'anms.examples.menu.auth' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
