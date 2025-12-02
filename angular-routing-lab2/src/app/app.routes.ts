import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { PageNotFound } from './page-not-found/page-not-found';
import { Tailwind } from './tailwind/tailwind';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'data-binding', component: DataBinding },
  { path: 'directives', component: Directives },
    { path: 'tailwind', component: Tailwind },
  { path: '**', component: PageNotFound }

];
