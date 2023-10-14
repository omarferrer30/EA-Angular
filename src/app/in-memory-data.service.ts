import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', power: 'being nice' },
      { id: 13, name: 'Bombasto', power:'bombastic' },
      { id: 14, name: 'Celeritas', power: 'ultra instinct' },
      { id: 15, name: 'Magneta', power:'superstrength' },
      { id: 16, name: 'RubberMan', power: 'rubs people' },
      { id: 17, name: 'Dynama', power: 'super fast' },
      { id: 18, name: 'Dr. IQ', power: 'super intelligent' },
      { id: 19, name: 'Magma', power: 'throws magma' },
      { id: 20, name: 'Tornado', power: 'destroyer' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
