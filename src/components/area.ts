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
class DetailArea extends AbstractArea {
  constructor(id: string) {
    super(id)
  }
}

/**
* @class
*/
class CubeGridArea extends AbstractArea {
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

export {KeyArea, ListArea, GridArea, CubeGridArea, DetailArea};
