interface IGroup {
  name: string;             // Name of the group
  expanded: boolean;        // Indicates if the group is expanded or not
  groups?: IGroup[];         // A list of child groups

  // Methods added to the Group interface to make it complete
  toggleGroup(): void;
  isGroup(): boolean;
  isExpanded(): boolean;
}
class Group implements IGroup {
  constructor(
    public name: string,
    public expanded: boolean = false,
    public groups: IGroup[] = []
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





export { type IGroup, Group };
