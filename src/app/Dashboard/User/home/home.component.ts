import { MovieListService } from './../../Admin/movie-list.service';
import { MovieItem } from './../itemData';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../Shared/navbar/navbar.component';
import { NgIf, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  movieList: any;

  constructor(public ml: MovieListService, private router: Router,) { }

  navigatetoDetail(i: number) {
    const newTitle = this.ml.movieList[i].title.toLowerCase().replaceAll(' ', '-')
    this.router.navigate(['/detail', { id: this.ml.movieList[i].id, title: newTitle }])
  }

  ngOnInit() {
  }

}


