import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ogrevno',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './ogrevno.component.html',
  styleUrl: './ogrevno.component.css'
})
export class OgrevnoComponent {

}
