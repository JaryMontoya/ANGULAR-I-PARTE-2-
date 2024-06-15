import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];
  page: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.rickAndMortyService.getEpisodes(this.page).subscribe((data: any) => {
      this.episodes = data.results;
    });
  }

  nextPage(): void {
    this.page++;
    this.loadEpisodes();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadEpisodes();
    }
  }
}
