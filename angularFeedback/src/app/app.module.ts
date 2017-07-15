import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { AttributesComponent } from './components/attributes/attributes.component';
import { StatementsComponent } from './components/statements/statements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AttributesComponent,
    StatementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
