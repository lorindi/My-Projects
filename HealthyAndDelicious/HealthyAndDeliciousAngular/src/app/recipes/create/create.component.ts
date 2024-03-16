import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private apiService: ApiService) {}
  addRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    
  }
}
