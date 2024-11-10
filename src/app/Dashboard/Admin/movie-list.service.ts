import { Injectable } from '@angular/core';
import { MovieItem } from '../User/itemData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  id!: number;
  title!: string;
  // movieListSubject: any;
  private movieListSubject = new BehaviorSubject<MovieItem[]>([]);
  movieListObservable = this.movieListSubject.asObservable();

  constructor() { }
  movieList: MovieItem[] = [
    {
      id: 1,
      title: 'Bagher Baccha',
      description: 'Bagher Bachcha, a group of masked robbers. They attack corrupted people and unmask them. Is "Bagher Bachcha" a threat or a saviour? Who are they?',
      images: [
        "/assets/images/bagher.webp"
      ],
      genres: 'Thriller *  Mythology * Drama',
      releaseDate: new Date('2024-08-01')
    },
    {
      id: 2,
      title: 'Gunin',
      description: 'The movie is about the clash among two brothers in an eternal love triangle followed by the mysterious death of their grandfather Razab Ali Guning, a village exorciser. ',
      images: [
        "/assets/images/gunin.webp"
      ],
      genres: 'Clasic * Drama',
      releaseDate: new Date('2024-01-01')
    },
    {
      id: 3,
      title: 'Baji',
      description: 'Young cricketer Apu delivers a match-winning performance in SPL2024, but is found dead at the team hotel.',
      images: [
        "/assets/images/baji.webp"
      ],
      genres: 'Drama * Thriller',
      releaseDate: new Date('2024-01-04')
    },
    {
      id: 4,
      title: 'Mukhosh',
      description: 'Discover the enchanting world of Adhunik Bangla Hotel, an anthology series that serves up a tantalizing array of authentic Bangla cuisine infused with fantasy, psychological horror and mythology, where each story unveils a new dish that will leave you craving for more.',
      images: [
        "/assets/images/mukhosh.webp"
      ],
      genres: 'Horror * Thriller * Fantacy',
      releaseDate: new Date('2023-05-01')
    },
    {
      id: 5,
      title: 'Kalpurush',
      description: 'Detective Miraj unravels a twisted murder case, intertwining with an old one, revealing a surreal truth that challenges his sanity.',
      images: [
        "/assets/images/kalpurush.webp"
      ],
      genres: 'Thriller * Drama',
      releaseDate: new Date('2023-01-03')
    },
  ]

  tempMovies = this.movieList;

  addMovie(movie: MovieItem) {
    this.movieList.push(movie);
    this.movieListSubject.next([...this.movieList]); // Notify subscribers
  }

  getMovies(): MovieItem[] {
    return this.movieList;
  }

  // Update an item (if needed, specific to structure)
  updateItem(movie: string, updateFn: (currentValue: any) => any): void {
    const currentValue = this.getItem(movie);
    if (currentValue !== null) {
      const updatedValue = updateFn(currentValue);
      this.setItem(movie, updatedValue);
    }
  }
  setItem(key: any, updatedValue: any) {
    throw new Error('Method not implemented.');
  }
  getItem(movie: string) {
    throw new Error('Method not implemented.');
  }

  deleteMovie(movie: any, MovieItem: any) {
    // localStorage.removeItem()
    this.movieList.splice(0, 1)
    localStorage.removeItem(movie);
  }
}
