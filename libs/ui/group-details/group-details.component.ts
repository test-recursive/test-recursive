import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from '../../../src/models/group.model';

@Component({
  selector: 'clx-group-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-details.component.html',
})

export class GroupDetailsComponent {
  @Input() selectedGroup = signal<Group | null>(null);

}
