import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Shared/navbar/navbar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  id!: number;
  title!: string;
  description!: string;
  images!: string[];
  genres!: string;
  releaseDate!: Date;
  ml: any;
  collection: any;
  index: any;

  constructor( private route: ActivatedRoute,){

  }

  ngOnInit(): void {
    this.route.params.subscribe((res: { [x: string]: string; }) => {
      this.id = Number(res['id']);
      this.title = res['title'];
      this.find()
    })
  }
  find() {
    const movie: any = this.ml.movieList.find((m: { id: number; }) => m.id === this.id)
    this.collection = movie
    this.index = this.ml.movieList.indexOf(movie)
  }
}
