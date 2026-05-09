import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeaceOfMindComponent } from './pages/peace-of-mind/peace-of-mind.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProcessComponent } from './pages/process/process.component';
import { TuoConstructionComponent } from './pages/tuo-construction/tuo-construction.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peace-of-mind', component: PeaceOfMindComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'tuo-construction', component: TuoConstructionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
