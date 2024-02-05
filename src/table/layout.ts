/**
 * @class
 */
class AbstractPanel {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

/**
 * @class
 */
class DisplayPanel extends AbstractPanel {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
*/
class ControlPanel extends AbstractPanel {
  constructor(id: string) {
    super(id);
  }
}

/**
* @class
*/
class AreaPanel extends AbstractPanel {
  constructor(id: string) {
    super(id);
  }
}

/**
* @class
*/
class ConstructableTable {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}


