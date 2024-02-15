type FieldDataType = string | number | Date | boolean | {};

class FieldBase {
  _name: string;
  _typeString: string;
  constructor(name: string, typeString: string) {
    this._name = name;
    this._typeString = typeString;
  }
  get name(): string {
    return this._name;
  }
}

interface Field<T extends FieldDataType> {
  extractValue(record: { [key: string]: FieldDataType }): T;
  get name(): string;
}

class TextField extends FieldBase implements Field<string> {
  constructor(name: string) {
    super(name, "text");
  }
  extractValue(record: { [key: string]: FieldDataType }): string {
    const value = record[this.name];
    if (typeof value === "string") {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a string.`,
    );
  }
}

class NumberField extends FieldBase implements Field<number> {
  constructor(name: string) {
    super(name, "number");
  }
  extractValue(record: { [key: string]: FieldDataType }): number {
    const value = record[this.name];
    if (typeof value === "number") {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a number.`,
    );
  }
}

class BooleanField extends FieldBase implements Field<boolean> {
  constructor(name: string) {
    super(name, "bool");
  }
  extractValue(record: { [key: string]: FieldDataType }): boolean {
    const value = record[this.name];
    if (typeof value === "boolean") {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a boolean.`,
    );
  }
}

class DateField extends FieldBase implements Field<Date> {
  constructor(name: string) {
    super(name, "date");
  }
  extractValue(record: { [key: string]: FieldDataType }): Date {
    const value = record[this.name];
    if (value instanceof Date) {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a boolean.`,
    );
  }
}

class DataRecord {
  name: string;
  fields: { [name: string]: Field<FieldDataType> };

  constructor(name: string) {
    this.name = name;
    this.fields = {};
  }

  addTextField(name: string): TextField {
    const field = new TextField(name);
    this.fields[name] = field;
    return field;
  }

  addNumberField(name: string): NumberField {
    const field = new NumberField(name);
    this.fields[name] = field;
    return field;
  }

  addBooleanField(name: string): BooleanField {
    const field = new BooleanField(name);
    this.fields[name] = field;
    return field;
  }

  addDateField(name: string): DateField {
    const field = new DateField(name);
    this.fields[name] = field;
    return field;
  }
}

export { DataRecord };
