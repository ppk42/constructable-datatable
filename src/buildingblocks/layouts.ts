/**
 * @class
 */
class AbstractLayout {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

/**
 * @class
 */
class VanillaTableLayout extends AbstractLayout {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class GridTableLayout extends AbstractLayout {
  constructor(id: string) {
    super(id);
  }
}

export {AbstractLayout, VanillaTableLayout, GridTableLayout};
