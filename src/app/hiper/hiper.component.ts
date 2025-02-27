import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hiper',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './hiper.component.html',
  styleUrl: './hiper.component.css'
})
export class HiperComponent {

}
