import { MovieListService } from './../../Admin/movie-list.service';
import { MovieItem } from './../itemData';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Shared/navbar/navbar.component';
import { NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,NgStyle,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

movieList: any;

  constructor(private ml: MovieListService ,
    private router: Router,
  ){
     this.tempMovies = this.ml.movieList
  }
  tempMovies!: any []


  navigatetoDetail(i: number){
    const newTitle = this.ml.movieList[i].title.toLowerCase().replaceAll(' ', '-')
    this.router.navigate(['/detail', { id: this.ml.movieList[i].id, title: newTitle }])
  }
}


