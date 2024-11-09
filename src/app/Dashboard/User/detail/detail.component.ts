import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Shared/navbar/navbar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieListService } from '../../Admin/movie-list.service';
import { MovieItem } from '../itemData';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgStyle],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {


  collection: any;
  index!: number;
  title: any;
  releaseDate: any;
  genres: any;

  movieList: MovieItem [] = []
  // id!: number;
  // title!: string;
  // description!: string;
  // images!: string[];
  // genres!: string;
  // releaseDate!: Date;
  // ml: any;
  // collection: any;
  // index: any;

  constructor( private route: ActivatedRoute,
    private ml: MovieListService
  ){
    this.tempMovies = this.ml.movieList
  }
  tempMovies!: any [];
  
  ngOnInit(): void {
    this.route.params.subscribe((res: { [x: string]: string; }) => {
      this.ml.id = Number(res['id']);
      this.ml.title = res['title'];
      this.find()
    })
  }
  find() {
    const movie: any = this.ml.movieList.find((m: { id: number; }) => m.id === this.ml.id)
    this.collection = movie
    this.index = this.ml.movieList.indexOf(movie)
  }
}
