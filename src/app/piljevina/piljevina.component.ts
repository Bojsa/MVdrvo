import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-piljevina',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './piljevina.component.html',
  styleUrl: './piljevina.component.css'
})
export class PiljevinaComponent {

}
