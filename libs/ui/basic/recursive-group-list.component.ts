import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { groups, GroupImpl } from '../../../src/app/group.model';



@Component({
  selector: 'app-recursive-group-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursive-group-list.component.html',
  styleUrls: ['./recursive-group-list.component.css']
})
export class RecursiveGroupListComponent {
  @Input()
  groups: GroupImpl[] = groups;
  @Input()
  group: GroupImpl | null = null;


  ngOnInit() {
    if (!this.groups) {
      // Initialize groups if they are not defined
      this.groups = []; // You should initialize groups here if necessary
    }

    // Iterate over groups to set methods correctly
    this.groups.forEach((group: GroupImpl) => {
      // Attach methods to the group
      group.toggleGroup = () => {
        group.expanded = !group.expanded;
      };

      group.isGroup = () => {
        return !!group.groups && group.groups.length > 0;
      };

      group.isExpanded = () => {
        return group.expanded;
      };
    });

    // If no group is selected, choose the first one
    if (!this.group) {
      this.group = this.groups[0];
    }
  }


  }
