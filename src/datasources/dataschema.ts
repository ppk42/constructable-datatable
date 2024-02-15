type FieldDataType = string | number | Date | boolean | {};

/**
 * @class
 */
class Field<T extends FieldDataType> {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  extractValue(record: { [key: string]: FieldDataType }): T | undefined ;

/**
 * @class
 */
class TextField extends Field<string> {
  value: string;
  constructor(name: string, value: string) {
    super(name, "string");
    this.value = value;
  }
}

/**
 * @class
 */
class DataRecord {
  name: string;
  fields: [Field<any>?];
  constructor(name: string) {
    this.name = name;
    this.fields = [];
  }
}
