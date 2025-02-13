interface IGroup {
  name: string;             // Name of the group (you can adjust this property as needed)
  expanded: boolean;        // Indicates if the group is expanded or not
  groups?: IGroup[];         // A list of child groups (optional, because not all groups may have subgroups)

  // Methods added to the Group interface to make it complete
  toggleGroup(): void;      // Toggles the expanded state of the group
  isGroup(): boolean;       // Checks if the group has children groups
  isExpanded(): boolean;    // Checks if the group is expanded
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

const groups: Group[] = [
  new Group('Group 1', false, [
    new Group('Group 1.1', false, [
      new Group('Group 1.1.1', false),
      new Group('Group 1.1.2', false, [
        new Group('Group 1.1.2.1', false, [
          new Group('Group 1.1.2.1.1', false, [
            new Group('Group 1.1.2.1.1.1', false)
          ])
        ]),
        new Group('Group 1.1.2.2', false)
      ])
    ]),
    new Group('Group 1.2', false)
  ]),
  new Group('Group 2', false, [
    new Group('Group 2.1', false, [
      new Group('Group 2.1.1', false),
      new Group('Group 2.1.2', false, [
        new Group('Group 2.1.2.1', false, [
          new Group('Group 2.1.2.1.1', false, [
            new Group('Group 2.1.2.1.1.1', false)
          ])
        ]),
        new Group('Group 2.1.2.2', false)
      ])
    ]),
    new Group('Group 2.2', false)
  ])
];



export { type IGroup, Group, groups };
