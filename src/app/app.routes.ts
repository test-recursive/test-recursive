import { Routes } from '@angular/router';
import { RecursiveGroupListComponent } from '../../libs/ui/basic/recursive-group-list.component';

export const routes: Routes = [
  { path: 'basic', component: RecursiveGroupListComponent },
  { path: '', redirectTo: '/basic', pathMatch: 'full' }, // Default route (optional)
  { path: '**', redirectTo: '/basic' } // Wildcard route (optional)
];
