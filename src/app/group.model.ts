interface Group {
  name: string;             // Name of the group (you can adjust this property as needed)
  expanded: boolean;        // Indicates if the group is expanded or not
  groups?: Group[];         // A list of child groups (optional, because not all groups may have subgroups)

  // Methods added to the Group interface to make it complete
  toggleGroup(): void;      // Toggles the expanded state of the group
  isGroup(): boolean;       // Checks if the group has children groups
  isExpanded(): boolean;    // Checks if the group is expanded
}

class GroupImpl implements Group {
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

const groups: GroupImpl[] = [
    new GroupImpl('Fruits', false, [
        new GroupImpl('Apple', false, [
            new GroupImpl('Green Apple', false),
            new GroupImpl('Red Apple', false)
        ]),
        new GroupImpl('Banana', false)
    ]),
    new GroupImpl('Vegetables', false, [
        new GroupImpl('Tomato', false, [
            new GroupImpl('Red Tomato', false),
            new GroupImpl('Green Tomato', false)
        ]),
        new GroupImpl('Cucumber', false)
    ])
];


export { type Group, type GroupImpl, groups };
