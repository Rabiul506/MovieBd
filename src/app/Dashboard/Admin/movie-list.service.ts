import { Injectable } from '@angular/core';
import { MovieItem } from '../User/itemData';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor() { }
  movieList: MovieItem [] = [
    {
      id: 1,
      title: 'Bagher Baccha',
      description: 'Bagher Bachcha, a group of masked robbers. They attack corrupted people and unmask them. Is "Bagher Bachcha" a threat or a saviour? Who are they?',
      images: [
          "/assets/images/bagher.webp"
      ],
      genres: 'Thriller, Mythology, Drama',
      releaseDate: new Date('2024-08-01')
  },
  {
    id: 2,
    title: 'Gunin',
    description: 'The movie is about the clash among two brothers in an eternal love triangle followed by the mysterious death of their grandfather Razab Ali Guning, a village exorciser. ',
      images: [
          "/assets/images/gunin.webp"
      ],
      genres: 'Clasic',
      releaseDate: new Date('2024-01-01')
  },
  {
    id: 3,
    title: 'Baji',
    description: 'Young cricketer Apu delivers a match-winning performance in SPL2024, but is found dead at the team hotel.',
      images: [
          "/assets/images/baji.webp"
      ],
      genres: 'Drama',
      releaseDate: new Date('2024-01-04')
  },
  {
    id: 4,
    title: 'Mukhosh',
    description: 'Discover the enchanting world of Adhunik Bangla Hotel, an anthology series that serves up a tantalizing array of authentic Bangla cuisine infused with fantasy, psychological horror and mythology, where each story unveils a new dish that will leave you craving for more.',
      images: [
          "/assets/images/mukhosh.webp"
      ],
      genres: 'Horror',
      releaseDate: new Date('2023-05-01')
  },
  {
    id: 5,
    title: 'Kalpurush',
    description: 'Detective Miraj unravels a twisted murder case, intertwining with an old one, revealing a surreal truth that challenges his sanity.',
      images: [
          "/assets/images/kalpurush.webp"
      ],
      genres: 'Thriller',
      releaseDate: new Date('2023-01-03')
  },
  ]
}
