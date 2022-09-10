import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChipOptionComponent } from './modules/chip/components/chip-option/chip-option.component';
import { ChipComponent } from './modules/chip/components/chip-input/chip.component';
import { ChipResultComponent } from './modules/chip/components/chip-result/chip-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    ChipOptionComponent,
    ChipResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [ChipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
