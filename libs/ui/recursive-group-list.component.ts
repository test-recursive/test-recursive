import { Component, Input } from '@angular/core';
import { Group } from '../../src/app/app.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recursive-group-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursive-group-list.component.html',
  styleUrls: ['./recursive-group-list.component.css']
})
export class RecursiveGroupListComponent {
  @Input() group: Group | null = null;
}
