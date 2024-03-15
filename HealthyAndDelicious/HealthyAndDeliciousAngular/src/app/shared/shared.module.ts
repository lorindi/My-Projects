import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';

@NgModule({
  declarations: [LoaderComponent, EmailDirective],
  imports: [CommonModule],
  exports: [LoaderComponent, EmailDirective],
})
export class SharedModule {}
