export class Model {
  user;
  items;
  constructor() {
    this.user = 'Sina';
    this.items = [
      { action: 'Create the project', done: false },
      { action: 'School', done: false },
      { action: 'Meeting', done: true },
      { action: 'Atiehs assignments', done: false },
    ];
  }
}

export class TodoItem {
  action;
  done;
  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}
