import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

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

  onRename() {
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
