/**
* @class
*/
class ConstructableTable {
  /**
  * @constructor
  * A Table has a unique name that can be used as an ID or for logging and error handling. 
  * It can be transposed or not transposed.
  */
  constructor(name, transpose) {
    this.name = name;
    this.transpose = !!transpose;
  }
}
