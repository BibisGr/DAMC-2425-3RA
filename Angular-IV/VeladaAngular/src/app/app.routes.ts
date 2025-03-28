import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'jugador', component: JugadorComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
