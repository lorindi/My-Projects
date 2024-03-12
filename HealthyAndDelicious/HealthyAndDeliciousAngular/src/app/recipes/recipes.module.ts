import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
