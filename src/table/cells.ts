/**
 * @class
 */
class AbstractCellType {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

/**
 * @class
 */
class TextCell extends AbstractCellType {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class NumberCell extends AbstractCellType {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class DateCell extends AbstractCellType {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class BooleanCell extends AbstractCellType {
  constructor(id: string) {
    super(id);
  }
}
