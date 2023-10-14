import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains: Villano[] = [
    { id: 1, nombre: 'Dr. Doom', superpoder: 'Inteligencia y tecnología avanzada' },
    { id: 2, nombre: 'Joker', superpoder: 'Mente criminal y trucos' },
    { id: 3, nombre: 'Loki', superpoder: 'Habilidad para cambiar de forma' },
    // Agrega más villanos según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }
}

export class Villano {
  id!: number;
  nombre!: string;
  superpoder!: string;
}