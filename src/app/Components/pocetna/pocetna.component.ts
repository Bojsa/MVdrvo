import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PocetnaComponent {
  showElement = true;
}
