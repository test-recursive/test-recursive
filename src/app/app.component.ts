import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';
import { groups, IGroup } from '../../src/app/group.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule ], // Include CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groups: IGroup[] = groups;
}
