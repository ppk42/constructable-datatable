type FieldDataType = string | number | Date | boolean | {};

class FieldBase {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

interface Field<T extends FieldDataType> {
  extractValue(record: { [key: string]: FieldDataType }): T | undefined;
  get name(): string;
}

class TextField extends FieldBase implements Field<string> {
  value: string;

  constructor(name: string, value: string) {
    super(name);
    this.value = value;
  }

  extractValue(record: { [key: string]: FieldDataType }): string | undefined {
    const value = record[this.name];
    if (typeof value === "string") {
      return value;
    }
    // TODO: implement converter
    return undefined;
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
