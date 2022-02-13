import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormComponent } from './form/form.component' //import form in two-way binding

@NgModule({
  declarations: [
    AppComponent,
    
    ChildComponent,
         UsdInrPipe,
         FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
