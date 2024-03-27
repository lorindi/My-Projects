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
    
    // Access form values here
    const formData = form.value;
    
    // Now formData contains all the form values, you can pass it to your service
    this.recipesService.addRecipe(formData)
      .subscribe(
        (response) => {
          console.log('Recipe created successfully:', response);
          // Optionally, you can navigate to a different page or show a success message here
        },
        (error) => {
          console.error('Error occurred while creating recipe:', error);
          // Optionally, you can display an error message to the user
        }
      );
  }
}