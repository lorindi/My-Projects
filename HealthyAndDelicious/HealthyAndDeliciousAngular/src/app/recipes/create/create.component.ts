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

    const formData = form.value;
    console.log('Sending recipe data:', formData); 
    // Call the service method to add the recipe
    this.recipesService.addRecipe(formData).subscribe(
      (response) => {
        console.log('Recipe added successfully:', response);
        // Optionally, you can redirect the user or show a success message
      },
      (error) => {
        console.error('Error adding recipe:', error);
        // Handle error
      }
    );
  }
}
