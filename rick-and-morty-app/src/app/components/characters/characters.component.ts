import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = data.results;
    });
  }

  nextPage(): void {
    this.page++;
    this.loadCharacters();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCharacters();
    }
  }
}
