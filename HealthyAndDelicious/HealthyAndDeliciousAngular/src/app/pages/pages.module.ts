import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactsComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
