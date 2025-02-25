import { Component, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { GroupService } from '../../../src/services/group.service';

@Component({
  selector: 'clx-context-menu',
  standalone: true,
  templateUrl: './context-menu.component.html',
})

export class ContextMenuComponent {
  @Input() groupId!: string;
  @Input() visible = false;
  @Input() position = { x: 0, y: 0 };

  @Output() close = new EventEmitter<void>();

  private groupService = inject(GroupService);

  onRename() {
    const groupName = this.groupService.getSelectedGroup$()!.name;
    const newName = prompt(`Enter new group name ${groupName} `, groupName);
    this.groupService.renameGroup(this.groupId, newName!);
    this.close.emit();
  }

  onDelete() {
    this.close.emit();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    this.close.emit();
  }
}
