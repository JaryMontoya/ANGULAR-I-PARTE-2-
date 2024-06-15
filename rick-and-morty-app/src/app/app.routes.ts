import { Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/characters.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'characters', component: CharacterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];