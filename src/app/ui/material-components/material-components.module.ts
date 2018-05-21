import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatIconModule,
  MatListModule
  ]

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialComponentsModule { }
