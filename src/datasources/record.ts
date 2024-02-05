/**
 * @class
 */
class AbstractDataRecord {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * @class
 */
class SimpleDataRecord extends AbstractDataRecord {
  constructor(name: string) {
    super(name);
  }
}
