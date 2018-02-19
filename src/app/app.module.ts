import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFilterComponent } from './dynamic-filter/dynamic-filter.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'search', component: DynamicFilterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
