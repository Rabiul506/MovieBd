import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  isItem: boolean = true;
  movieList: Array<any> = [];

  showItem(){
    this.isItem = !this.isItem;
  }
 

  addItemForm: FormGroup;

  constructor(private ml: MovieListService ){
    this.movieList = this.ml.movieList,

    this.addItemForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      images : new FormArray([]),
      genres: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required)
    })
  }
  // tempMovies!: any []

  onImageSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.addItemForm.patchValue({ images: file });
      this.addItemForm.get('images')?.updateValueAndValidity();
    }
  }

  saveMovie() {
    if (this.movieList != null && this.addItemForm.valid) {
      const formData = this.addItemForm.value;
      if(this.movieList){

        this.movieList.push({
          title: formData.title,
          description: formData.description,
          image: URL.createObjectURL(formData.images),
          genres: formData.genres,
          releaseDate: formData.releaseDate,
        });
      }
      // this.addItemForm.reset();
      // this.isItem = false;
      console.log(this.addItemForm.value);
    }
    
  }

  onSubmit(){
    if(this.movieList != null){

      if(this.movieList){
        this.movieList.push(this.addItemForm.value)
      }else{
        console.log(this.addItemForm.value)
      }
    }
    }

}
