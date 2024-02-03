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
class NumberFiled extends AbstractField {
  value: number;
  constructor(name: string, value: number) {
    super(name)
    this.value = value;
  }
}

/**
* @class
*/
class DateFiled extends AbstractField {
  value: Date;
  constructor(name: string, value: Date) {
    super(name)
    this.value = value;
  }
}

