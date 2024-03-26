import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private recipesService: RecipesService) {}
  addRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    
  }
}
