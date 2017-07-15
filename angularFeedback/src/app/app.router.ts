import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AttributesComponent } from './components/attributes/attributes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatementsComponent } from './components/statements/statements.component';
import { VariablesComponent } from './components/variables/variables.component';

const routes: Routes = [
  { path: '', redirectTo: 'attributes', pathMatch: 'full' },
  { path: 'attributes', component: AttributesComponent },
  { path: 'statements', component: StatementsComponent },
  { path: 'variables', component: VariablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];