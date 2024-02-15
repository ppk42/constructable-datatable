/**
 * @class
 */
class DataSource {
  id: string;
  data: [{[key:string]: any}?];
  constructor(id: string) {
    this.id = id;
    this.data = [];
  }
}

export { DataSource };
