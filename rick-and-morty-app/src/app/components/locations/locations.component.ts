import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];
  page: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.rickAndMortyService.getLocations(this.page).subscribe((data: any) => {
      this.locations = data.results;
    });
  }

  nextPage(): void {
    this.page++;
    this.loadLocations();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadLocations();
    }
  }
}
