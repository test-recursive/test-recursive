import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from '../context-menu/context-menu.component';
import { GroupModel } from '../../models/group-model';

@Component({
  selector: 'clx-recursive-group-list',
  imports: [CommonModule, ContextMenuComponent],
  templateUrl: './recursive-group-list.component.html',
})
export class RecursiveGroupListComponent {

  @Input() groups: GroupModel[] = [];
  @Output() selectedGroupChange = new EventEmitter<GroupModel>();
  @Output() groupsChange = new EventEmitter<GroupModel[]>();

  selectedGroup: GroupModel | undefined = undefined;
  targetGroup: GroupModel | undefined = undefined;
  contextMenuVisible = false;
  contextMenuPosition = { x: 0, y: 0 };

  // onGroupClick(group: GroupModel) {
  //   this.selectedGroupChange.emit(group);
  //   if (this.isGroup(group) && group.subGroups) {
  //     this.toggleGroup(group);
  //   }
  // }

  onGroupClick(group: GroupModel) {
    if (this.selectedGroup && this.selectedGroup !== group) {
      this.targetGroup = group;
      if (confirm(`Move ${this.selectedGroup.name} to ${this.targetGroup.name}?`)) {
        this.moveGroup(this.selectedGroup, this.targetGroup);
      }
      this.selectedGroup = undefined;
      this.targetGroup = undefined;
    }
  }

  // onRightClick(event: MouseEvent, group: GroupModel) {
  //   event.preventDefault();
  //   this.selectedGroupChange.emit(group);
  //   console.log(`Right-clicked on: ${group.id} - ${group.name}`);

  //   this.selectedGroup = group;
  //   this.contextMenuVisible = true;
  //   this.contextMenuPosition = { x: event.clientX, y: event.clientY };

  //   console.log(`Updated selectedGroup for menu: ${this.selectedGroup.id} - ${this.selectedGroup.name}`);
  // }

  onRightClick(event: MouseEvent, group: GroupModel) {
    event.preventDefault();
    this.selectedGroup = group;
    this.contextMenuVisible = true;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
  }

  moveGroup(group: GroupModel, targetGroup: GroupModel) {
    console.log(`Moving group: ${group.id} - ${group.name} to: ${targetGroup.id} ${targetGroup.name}`);
    this.removeGroup(group, this.groups);
    targetGroup.subGroups = [...(targetGroup.subGroups || []), group];
    this.groupsChange.emit(this.groups);
  }

  removeGroup(groupToRemove: GroupModel, groupList: GroupModel[]): boolean {
    const index = groupList.findIndex(group => group.id === groupToRemove.id);
    if (index !== -1) {
      groupList.splice(index, 1);
      return true;
    }
    return groupList.some(group => this.removeGroup(groupToRemove, group.subGroups || []));
  }


  renameGroup = (newName: string, group: GroupModel) => {
    console.log(`Renaming group: ${group.id} - ${group.name} to: ${newName.trim()}`);
    this.renameGroupById(group.id, newName.trim());
    console.log(`Group renamed to: ${newName.trim()}`);
  }

  deleteGroup = (groupToDelete: GroupModel) => {
    console.log(`Deleting group: ${groupToDelete.id} - ${groupToDelete.name}`);

    const removeGroupById = (groups: GroupModel[]): GroupModel[] => {
      const groupFound = groups.find(group => group.id === groupToDelete.id);
      if (groupFound) {
        groups.splice(groups.indexOf(groupFound), 1);
      }
      return groups;
    };

    this.groups = removeGroupById(this.groups);

    console.log(`Group deleted successfully: ${groupToDelete.id}`);
  }

  toggleGroup = (group: GroupModel): void => {
    console.log(`Group toggled in model: ${group.id}`);
    group.expanded = !group.expanded;

    // Recursively collapse all child groups if this group is collapsed
    // If collapsing, set all child groups' 'expanded' to false
    if (!group.expanded && (group.subGroups?.length ?? 0) > 0) {
      this.setAllChildGroupsCollapsed(group);
    }
  }

  renameGroupById = (groupId: string, newName: string): void => {
    console.log(`Renaming group with ID: ${groupId} to '${newName}'`);

    let groupFound = false;

    const updateGroupName = (groups: GroupModel[]) => {
      groups.forEach(group => {
        if (group.id === groupId) {
          group.name = newName;
          groupFound = true;
        } else if (group.subGroups && group.subGroups.length > 0) {
          updateGroupName(group.subGroups);
        }
      });
    };

    updateGroupName(this.groups);

    if (!groupFound) {
      console.warn(`Group with ID ${groupId} not found.`);
    } else {
      console.log(`Group renamed successfully.`);
    }
  }

  isGroup = (group: GroupModel): boolean => {
    return !!group.subGroups && group.subGroups.length > 0;
  }

  isExpanded = (group: GroupModel): boolean => {
    return group.expanded;
  }

  // isGroup = (group: GroupModel): boolean => {
  //   return !!group.subGroups && (group.subGroups?.length ?? 0) > 0;
  // }

  // isExpanded = (group: GroupModel): boolean => {
  //   return group.expanded;
  // }

  // Helper method to set all child groups to collapsed
  private setAllChildGroupsCollapsed = (group: GroupModel): void => {
    if (!!group.subGroups)
      group.subGroups.forEach(subGroup => {
        subGroup.expanded = false;

        // If the child group has its own children, collapse them as well
        if (!!subGroup.subGroups && subGroup.subGroups.length > 0) {
          this.setAllChildGroupsCollapsed(subGroup);
        }
      });
  }
}
