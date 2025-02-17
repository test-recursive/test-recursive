import { Component, Input } from '@angular/core';
import { Group } from '../../../src/models/group.model';  // Import the Group class
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clx-recursive-group-list',
  imports: [CommonModule],
  templateUrl: './recursive-group-list.component.html',
  styleUrls: ['./recursive-group-list.component.css']
})
export class RecursiveGroupListComponent {
  @Input() groups: Group[] = [];

  toggleGroup(group: Group) {
    group.toggleGroup();
  }
}
