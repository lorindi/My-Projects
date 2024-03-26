import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [LoaderComponent, SlicePipe, ElapsedTimePipe],
  imports: [CommonModule],
  exports: [LoaderComponent, SlicePipe, ElapsedTimePipe],
})
export class SharedModule {}
