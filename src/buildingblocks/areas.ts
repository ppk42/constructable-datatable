"use strict";

/**
* @class
*/
class AbstractArea {
  id: String;
  constructor(id: string) {
    this.id = id;
  }
}

/**
* @class
*/
class DisplayArea extends AbstractArea {
  constructor(id: string) {
    super(id)
  }
}

/**
* @class
*/
class StackArea extends AbstractArea {
  constructor(id: string) {
    super(id)
  }
}

/**
* @class
*/
class GridArea extends AbstractArea {
  constructor(id: string) {
    super(id)
  }
}

/**
* @class
*/
class ListArea extends AbstractArea {
  constructor(id: string) {
    super(id)
  }
}

/**
* @class
*/
class KeyArea extends AbstractArea {
  constructor(id: string) {
    super(id)
  }
}

export {AbstractArea, KeyArea, ListArea, GridArea, StackArea, DisplayArea};
