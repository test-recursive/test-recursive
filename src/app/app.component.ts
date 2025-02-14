import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursiveGroupListComponent } from '../../libs/ui/basic/recursive-group-list.component';
import { Group, IGroup } from '../models/group.model';
import { IGroupData } from '../models/group-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RecursiveGroupListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  groups: Group[] = [];

  ngOnInit() {
    this.groups = this.getMappedGroups();
  }

  // Define the raw IGroupData array
  private fetchGroups(): IGroupData[] {
    return [
      {
        name: 'Group 1',
        expanded: false,
        groups: [
          { name: 'Subgroup 1.1', expanded: false },
          { name: 'Subgroup 1.2', expanded: false }
        ]
      },
      {
        name: 'Group 2',
        expanded: false,
        groups: [
          { name: 'Subgroup 2.1', expanded: false }
        ]
      }
    ];
  }

  // Convert IGroupData to Group instances
  private getMappedGroups(): Group[] {
    return this.fetchGroups().map(groupData => this.mapToGroup(groupData));
  }

  // Helper method to map IGroupData to Group
  private mapToGroup(groupData: IGroupData): Group {
    const groups = groupData.groups?.map(subgroupData => this.mapToGroup(subgroupData)) || [];
    return new Group(groupData.name, groupData.expanded, groups);
  }
}
