import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursiveGroupListComponent } from '../../libs/ui/basic/recursive-group-list.component';
import { Group } from '../models/group.model';
import { IGroupData } from '../models/interfaces/group-data.model';

@Component({
  selector: 'clx-recursive-group-root',
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
      this.createGroup('Group A', [
        this.createGroup('Group A.1', [
          this.createGroup('Group A.1.1', [
            new Group('Group A.1.1.1', false),
            new Group('Group A.1.1.2', false)
          ]),
          this.createGroup('Group A.1.2', [
            this.createGroup('Group A.1.2.1', [
              this.createGroup('Group A.1.2.1.1', [
                new Group('Group A.1.2.1.1.1', false),
                new Group('Group A.1.2.1.1.2', false)
              ])
            ]),
            new Group('Group A.1.2.2', false),
            new Group('Group A.1.2.3', false)
          ])
        ]),
        this.createGroup('Group A.2', [
          this.createGroup('Group A.2.1', [
            new Group('Group A.2.1.1', false),
            new Group('Group A.2.1.2', false)
          ]),
          this.createGroup('Group A.2.2', [
            new Group('Group A.2.2.1', false),
            new Group('Group A.2.2.2', false)
          ])
        ])
      ]),
      this.createGroup('Group B', [
        this.createGroup('Group B.1', [
          this.createGroup('Group B.1.1', [
            new Group('Group B.1.1.1', false),
            new Group('Group B.1.1.2', false)
          ]),
          this.createGroup('Group B.1.2', [
            this.createGroup('Group B.1.2.1', [
              this.createGroup('Group B.1.2.1.1', [
                new Group('Group B.1.2.1.1.1', false)
              ])
            ]),
            new Group('Group B.1.2.2', false),
            new Group('Group B.1.2.3', false)
          ])
        ]),
        this.createGroup('Group B.2', [
          new Group('Group B.2.1', false),
          new Group('Group B.2.2', false)
        ])
      ]),
      this.createGroup('Group C', [
        this.createGroup('Group C.1', [
          this.createGroup('Group C.1.1', [
            new Group('Group C.1.1.1', false),
            new Group('Group C.1.1.2', false),
            new Group('Group C.1.1.3', false)
          ]),
          this.createGroup('Group C.1.2', [
            this.createGroup('Group C.1.2.1', [
              this.createGroup('Group C.1.2.1.1', [
                new Group('Group C.1.2.1.1.1', false)
              ])
            ]),
            new Group('Group C.1.2.2', false),
            new Group('Group C.1.2.3', false)
          ])
        ]),
        this.createGroup('Group C.2', [
          new Group('Group C.2.1', false),
          new Group('Group C.2.2', false)
        ])
      ]),
      // Adding a couple of new base nodes
      this.createGroup('Group D', [
        this.createGroup('Group D.1', [
          new Group('Group D.1.1', false),
          this.createGroup('Group D.1.2', [
            new Group('Group D.1.2.1', false),
            new Group('Group D.1.2.2', false)
          ])
        ]),
        this.createGroup('Group D.2', [
          new Group('Group D.2.1', false),
          new Group('Group D.2.2', false)
        ])
      ]),
      this.createGroup('Group E', [
        this.createGroup('Group E.1', [
          new Group('Group E.1.1', false),
          new Group('Group E.1.2', false)
        ]),
        this.createGroup('Group E.2', [
          new Group('Group E.2.1', false),
          this.createGroup('Group E.2.2', [
            new Group('Group E.2.2.1', false),
            new Group('Group E.2.2.2', false)
          ])
        ])
      ])
    ];
    return groups;
  }

  // Helper function to create a group with nested groups
  private createGroup(name: string, subgroups: Group[] = []): Group {
    return new Group(name, false, subgroups);
  }

  // Convert IGroupData to Group instances
  private getMappedGroups(): Group[] {
    return this.fetchGroups().map(groupData => this.mapToGroup(groupData));
  }

  // Helper method to map IGroupData to Group recursively
  private mapToGroup(groupData: IGroupData): Group {
    const groups = groupData.groups?.map(subgroupData => this.mapToGroup(subgroupData)) || [];
    return new Group(groupData.name, groupData.expanded, groups);
  }
}
