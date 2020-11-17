import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveComponentModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveComponentModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
  ]
})
export class SharedModule { }
