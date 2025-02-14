interface IGroup {
  name: string;
  expanded: boolean;
  groups?: IGroup[];
}

interface IGroupMethods {
  toggleGroup(): void;
  isGroup(): boolean;
  isExpanded(): boolean;
}

class Group implements IGroup, IGroupMethods {
  constructor(
    public name: string,
    public expanded: boolean = false,
    public groups: Group[] = []
  ) {}

  toggleGroup(): void {
    this.expanded = !this.expanded;
  }

  isGroup(): boolean {
    return this.groups && this.groups.length > 0;
  }

  isExpanded(): boolean {
    return this.expanded;
  }
}

export { type IGroup, type IGroupMethods, Group };
