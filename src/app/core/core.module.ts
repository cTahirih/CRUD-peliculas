import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlicePipePipe } from './pipes/slice-pipe.pipe';

@NgModule({
  declarations: [SlicePipePipe],
  exports: [
    SlicePipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
