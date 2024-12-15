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

  addItemForm: FormGroup;
  isItem: boolean = true;
  movieList: MovieItem [] = [];
  // movieList: MovieListService [] = [];

  constructor(
    private ml: MovieListService,
    private fb: FormBuilder,
   ){
      const temperMovieList = localStorage.getItem('movieLocal')

      this.ml.movieList = temperMovieList? JSON.parse(temperMovieList): [];

    this.addItemForm = this.fb.group({
      title: [''],
      description: [''],
      image: ['/assets/images/virus.webp'] , // Placeholder for image data
      genres: [''],
      releaseDate: [''],
    });
  }

  ngOnInit() {
    this.movieList = this.ml.movieList;
    const userFullnames = this.users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
    })
    
    console.log(userFullnames);
  }

  showItem(){
    this.isItem = !this.isItem;
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


  // cardOne: any [] = [ ];
  
onSubmit() {
  const metaMovie = this.addItemForm.value;
  this.ml.movieList.push(metaMovie);
  console.log(this.ml.movieList);
  
  localStorage.setItem('movieLocal', JSON.stringify(this.ml.movieList))

  // resetItem(){

  // }

  this.addItemForm.reset()
}

removeItem(i: number){
  this.ml.removeItem('movieLocal' );
  this.movieList.splice(i, 1)
}

// isColor: boolean = false;

// togleColor(){
//   this.isColor = !this.isColor
// }

users: any [] = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];


}
