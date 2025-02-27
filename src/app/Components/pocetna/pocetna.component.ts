import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

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

  faqItems: FAQItem[] = [
    { question: 'Gde se nalazite?', answer: 'Firma je u Zablju kod Novog Sada. Roba se nalazi i preuzima na pilani u Loznici i Malom Zvorniku. Tamo mozete i pogledati robu svakim radnim danom od 7h do 14h.', isOpen: false },
    { question: 'Koje vrste dasaka prodajete?', answer: 'Prodajemo samo bukovu dasku.', isOpen: false },
    { question: 'Zanima me da li imate daske debljine 30mm i širine 250mm minumum?', answer: 'Nemamo dasku od 30mm. Imamo od 27mm do 52mm. U toj širini nemamo. Ne sečemo šire od 20cm, jer se krivi priliko sušenja i dolazi do pucanja, Dužine imamo od 25cm do 3+ metra.', isOpen: false },
    { question: 'Koje su sirine dasaka?', answer: 'Daske su sirine od 10 do 20cm.', isOpen: false },
    { question: 'Da li dajete popust na veće količine?', answer: 'Može popust ako je veca količina!', isOpen: false },
    { question: 'Da li prodajete već dihtovanu i abrihtovanu dasku?', answer: 'Ne, ne prodajemo', isOpen: false },
    { question: 'Imate li sušenu belu bukvu i koja je cena?', answer: 'Imamo belu bukvu. ***', isOpen: false }


    
    // 
];

toggleAnswer(item: FAQItem) {
    item.isOpen = !item.isOpen;
}
  
}
