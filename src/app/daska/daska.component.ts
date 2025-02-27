import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../Components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-daska',
  standalone: true,
  imports: [HeaderComponent, RouterModule, CommonModule, FooterComponent,MatIconModule],
  templateUrl: './daska.component.html',
  styleUrl: './daska.component.css'
})
export class DaskaComponent {

}
