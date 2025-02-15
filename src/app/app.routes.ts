import { Routes } from '@angular/router';
import { PocetnaComponent } from './Components/pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { UslugeComponent } from './Components/usluge/usluge.component';
import { KomentariComponent } from './Components/komentari/komentari.component';
import { ProizvodiComponent } from './Components/proizvodi/proizvodi.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pocetna', pathMatch: 'full'},
    {path: 'pocetna', component: PocetnaComponent},
    {path: 'oNama', component: ONamaComponent},
    {path: 'usluge', component: UslugeComponent},
    {path: 'komentari', component: KomentariComponent},
    {path: 'proizvodi', component: ProizvodiComponent}
];
