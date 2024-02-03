/**
* @class
*/
class AbstractSorter {
  name: string;
  sortDirection: string;
  constructor(name: string, sortDirection: string) {
    this.name = name;
    this.sortDirection = sortDirection;
  }
}

