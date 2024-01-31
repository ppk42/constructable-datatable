/**
* @class
*/
class FieldConstraint {
  constructor(name, field, op, value) {
    this.name = name;
    this.field = field;
    this.op = op;
    this.value = value;
    this.rangeLow = rangeLow;
    this.rangeHigh = rangeHigh;
  }
}

/**
* @class
*/
class RecordExpressionFilter {
  constructor(name, expression) {
    this.name = name;
    this.expression = expression;
  }
}

/**
* @class
*/
class RecordConstraint {
  constructor(name, filterFunction) {
    this.name = name;
    this.filterFunction = filterFunction;
  }
}


