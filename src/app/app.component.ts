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
    const groups = [
      new Group('Group A', false, [
        new Group('Group A.2', false, [
          new Group('Group A.2.1', false),
          new Group('Group A.2.2', false, [
            new Group('Group A.2.2.1', false, [
              new Group('Group A.2.2.1.1', false, [
                new Group('Group A.2.2.1.1.1', false),
                new Group('Group A.2.2.1.1.2', false)
              ])
            ]),
            new Group('Group A.2.2.2', false)
          ])
        ]),
        new Group('Group A.2', false)
      ]),
      new Group('Group B', false, [
        new Group('Group B.1', false, [
          new Group('Group B.1.1', false),
          new Group('Group B.1.2', false, [
            new Group('Group B.1.2.1', false, [
              new Group('Group B.1.2.1.1', false, [
                new Group('Group B.1.2.1.1.1', false)
              ])
            ]),
            new Group('Group B.1.2.2', false)
          ])
        ]),
        new Group('Group B.2', false)
      ]),
      new Group('Group C', false, [
        new Group('Group C.1', false, [
          new Group('Group C.1.1', false, [
            new Group('Group C.1.2.1', false, [
              new Group('Group C.1.2.1.1', false)
            ]),
            new Group('Group C.1.2.2', false)
          ]),
          new Group('Group C.1.2', false)
        ]),
        new Group('Group C.2', false)
      ])
    ];

    // Returning the groups directly, no need to redefine them
    return groups;
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
