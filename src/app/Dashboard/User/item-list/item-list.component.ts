import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieItem } from '../itemData';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: [''],
      description: [''],
      images: [null]  // Placeholder for image data
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        this.movieForm.patchValue({
          images: reader.result // Set the Base64 string as the form control value
        });
      };
      reader.readAsDataURL(file);
    }
  }

  movie: MovieItem [ ] = [ ];
  onSubmit() {
    const movieData = this.movieForm.value;
    
    // Store data in localStorage
    const existingMovies = JSON.parse(localStorage.getItem('movies') || '[]');
    existingMovies.push(movieData);
    localStorage.setItem('movies', JSON.stringify(existingMovies));
    
    console.log('Movie added:', movieData);
    console.log(this.movieForm.value);
    this.movie.push(this.movieForm.value)

    
  }
}
