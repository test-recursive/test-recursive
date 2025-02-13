import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';
import { RecursiveGroupListComponent } from '../../libs/ui/basic/recursive-group-list.component';
import { Group, IGroup } from '../../src/app/group.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RecursiveGroupListComponent ], // Include CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groups: IGroup[] = [
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
}
