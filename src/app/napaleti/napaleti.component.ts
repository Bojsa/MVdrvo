import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-napaleti',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './napaleti.component.html',
  styleUrl: './napaleti.component.css'
})
export class NapaletiComponent {

}
