import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
