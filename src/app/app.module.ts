import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
