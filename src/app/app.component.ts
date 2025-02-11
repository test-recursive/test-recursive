import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RecursiveGroupListComponent } from '../../libs/ui/recursive-group-list.component';
import { Group } from './app.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RecursiveGroupListComponent], // Include CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groups: Group[] = [
    {
      name: 'Group 1',
      children: [
        {
          name: 'Subgroup 1.1',
          children: [
            { name: 'Subgroup 1.1.1' },
            { name: 'Subgroup 1.1.2' }
          ]
        },
        {
          name: 'Subgroup 1.2'
        }
      ]
    },
    {
      name: 'Group 2',
      children: [
        {
          name: 'Subgroup 2.1'
        }
      ]
    }
  ];
}
