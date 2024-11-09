import { MovieItem } from './../../User/itemData';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
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
export class ListItemComponent {

  isItem: boolean = true;
  movieList: Array<any> = [];
  // movieList: MovieListService [] = [];


  showItem(){
    this.isItem = !this.isItem;
  }
 

  addItemForm: FormGroup;

  constructor(
    private ml: MovieListService,
    private fb: FormBuilder,
   ){
    this.movieList = this.ml.movieList,
    

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
      image: [null] , // Placeholder for image data
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

  saveMovie() {
    const movieData = this.addItemForm.value


  this.ml.addMovie(movieData);
  localStorage.setItem('movies', JSON.stringify(this.ml.movieList));

  // this.ml.movieList = [...this.ml.movieList, movieData];
  
  this.addItemForm.reset({
    title: '',
    description: '',
    image: null,
    genres: '',
    releaseDate: ''
  });

    // const oldData = localStorage.getItem("movieItem");
    // if(oldData != null){
    //   const parseData = JSON.parse(oldData);
    //   this.movieList.controls['empid']setvalue(parseData.length + 1)
    // }
    
  }

    // Update an item (if needed, specific to structure)
    updateItem(movie: string, updateFn: (currentValue: any) => any): void {
      const currentValue = this.getItem(movie);
      if (currentValue !== null) {
        const updatedValue = updateFn(currentValue);
        this.setItem(movie, updatedValue);
      }
    }
  setItem(key: string, updatedValue: any) {
    throw new Error('Method not implemented.');
  }
  // getItem(key: string) {
  //   throw new Error('Method not implemented.');
  // }
    // Read an item
    getItem(movie: string): any {
      const item = localStorage.getItem(movie);
      return item ? JSON.parse(item) : null;
    }

  removeItem(){
    this.movieList.splice(0, 1)
  }
  // cardOne: any [] = [ ];
  
onSubmit() {
  // if(this.cardOne != null){
  //   this.cardOne.push(this.addItemForm.value)
  //   }else{
  //     console.log(this.addItemForm.value)
  //   }

  //   this.movieList.push(this.cardOne)

  if (this.addItemForm.valid) {
    this.saveMovie(); // Call saveMovie directly
  } else {
    console.warn('Form is invalid');
  }
}

ngOnInit() {
  // this.ml.movieListObservable.subscribe(updatedList => {
  //   this.movieList = updatedList;
  // });
  // this.movieList.values
   
}

}
