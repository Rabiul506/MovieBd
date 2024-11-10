import { Component } from '@angular/core';
import { MovieListService } from '../../Dashboard/Admin/movie-list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private ml: MovieListService) { }

  searchMovie: any[] = [];
  searchIcon: boolean = false;

  movieName = new FormControl('', { nonNullable: true });

  findMovie() {
    const searchValue: string = this.movieName.value?.toLowerCase();
    this.searchMovie = this.ml.movieList.filter(x => x.title.toLowerCase().includes(searchValue) === true);
    this.ml.movieList = this.searchMovie;
    this.searchIcon = true;

  }

  resetMovies() {
    this.ml.movieList = this.ml.tempMovies;
    this.searchIcon = false;
  }
}

