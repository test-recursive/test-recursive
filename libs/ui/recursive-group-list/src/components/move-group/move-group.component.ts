import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupModel } from '../../models/group-model';

@Component({
  selector: 'clx-move-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './move-group.component.html'
})
export class MoveGroupComponent {
  @Input() group!: GroupModel;
  @Input() movingGroup!: GroupModel;
  @Input() receivingGroup!: GroupModel;
  @Output() move = new EventEmitter<GroupModel>();

  confirmMove(targetGroup: GroupModel): void {
    if (confirm(`Move "${this.group.name}" to "${targetGroup.name}"?`)) {
      this.move.emit(targetGroup);
    }
  }
}
