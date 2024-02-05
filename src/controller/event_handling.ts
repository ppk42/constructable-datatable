/**
 * Derive state classes from this base state. 
 * @class
 */
class ReactiveState {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  handleEvent(event: Event): ReactiveState {

    return this;
  }
}
