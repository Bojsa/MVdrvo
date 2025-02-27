import { Routes } from '@angular/router';
import { PocetnaComponent } from './Components/pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { UslugeComponent } from './Components/usluge/usluge.component';
import { KomentariComponent } from './Components/komentari/komentari.component';
import { ProizvodiComponent } from './Components/proizvodi/proizvodi.component';
import { DaskaComponent } from './daska/daska.component';
import { HiperComponent } from './hiper/hiper.component';
import { OgrevnoComponent } from './ogrevno/ogrevno.component';
import { NapaletiComponent } from './napaleti/napaleti.component';
import { PiljevinaComponent } from './piljevina/piljevina.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pocetna', pathMatch: 'full'},
    {path: 'pocetna', component: PocetnaComponent},
    {path: 'oNama', component: ONamaComponent},
    {path: 'usluge', component: UslugeComponent},
    {path: 'proizvodi', component: ProizvodiComponent,
        children: [
            {
                path: 'daska', component: DaskaComponent
            },
            {
                path: 'hiper', component: HiperComponent
            },
            {
                path: 'ogrevno-drvo', component: OgrevnoComponent
            },
            {
                path: 'pilansko-drvo-na-paleti', component: NapaletiComponent
            },
            {
                path: 'pilansko-drvo-u-refuzi', component: NapaletiComponent
            },
            {
                path: 'piljevina', component: PiljevinaComponent
            }
        ]
    },
    {path: 'komentari', component: KomentariComponent}
];
