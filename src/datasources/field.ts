/**
 * @class
 */
class AbstractField {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

}

/**
* @class
*/
class TextField extends AbstractField {
  value: string
  constructor(name: string, value: string) {
    super(name)
    this.value = value;
  }
}


/**
* @class
*/
class NumberField extends AbstractField {
  value: number;
  constructor(name: string, value: number) {
    super(name)
    this.value = value;
  }
}

/**
* @class
*/
class DateField extends AbstractField {
  value: date;
  constructor(name: string, value: Date) {
    super(name)
    this.value = value;
  }
}

/**
* @class
*/
class BooleanField extends AbstractField {
  value: boolean;
  constructor(name: string, value: boolean) {
    super(name)
    this.value = value;
  }
}

/**
* @class
*/
class ObjectField extends AbstractField {
  value: object;
  constructor(name: string, value: object) {
    super(name)
    this.value = value;
  }
}

/**
* @class
*/
class ImageField extends AbstractField {
  value: string;
  constructor(name: string, value: string) {
    super(name)
    this.value = value;
  }
}
