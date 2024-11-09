import { MovieItem } from './../../User/itemData';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MovieListService } from '../movie-list.service';
// import { MovieItem } from '../../User/itemData';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent implements OnInit{

  isItem: boolean = true;
  movieList: Array<any> = [];
  // movieList: MovieListService [] = [];


  showItem(){
    this.isItem = !this.isItem;
  }

  ngOnInit() {
    this.movieList = this.ml.movieList;
  
  }
 

  addItemForm: FormGroup;

  constructor(
    private ml: MovieListService,
    private fb: FormBuilder,
   ){
      const temperMovieList = localStorage.getItem('movieLocal')

      this.ml.movieList = temperMovieList? JSON.parse(temperMovieList): [];


    // this.addItemForm = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   description: new FormControl('', Validators.required),
    //   images : new FormArray([]),
    //   genres: new FormControl('', Validators.required),
    //   releaseDate: new FormControl('', Validators.required)
    // })
    this.addItemForm = this.fb.group({
      title: [''],
      description: [''],
      image: ['/assets/images/virus.webp'] , // Placeholder for image data
      genres: [''],
      releaseDate: [''],
    });
  }
  // tempMovies!: any []

  onImageSelected(event: Event) {

    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        this.addItemForm.patchValue({
          image: reader.result // Set the Base64 string as the form control value
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeItem(i: number){
    this.movieList.splice(i, 1)
  }
  // cardOne: any [] = [ ];
  
onSubmit() {
  this.ml.movieList.push(this.addItemForm.value);
  localStorage.setItem('movieLocal', JSON.stringify(this.ml.movieList))
}


}
