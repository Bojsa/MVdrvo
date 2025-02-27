import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./Components/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogintoComponent } from "./loginto/loginto.component";
import { DaskaComponent } from "./daska/daska.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, CommonModule, FooterComponent, MatDialogModule, LogintoComponent, DaskaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MV drvo';
  
}
