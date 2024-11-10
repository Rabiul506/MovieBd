import { MovieListService } from './../../Dashboard/Admin/movie-list.service';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private ml: MovieListService
  ){}

  searchMovie: any [] = [];

  movieName = new FormControl('',{nonNullable: true});  

  findMovie(){
  const searchValue: string = this.movieName.value ?.toLowerCase();

    this.searchMovie = this.ml.movieList.filter(x => x.title === searchValue);
    this.ml.movieList = this.searchMovie
  }
}
