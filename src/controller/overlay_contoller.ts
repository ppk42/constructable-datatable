/**
 * @class
 */
class AbstractOverlayController {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * @class
 */
class ConfigPanelController extends AbstractOverlayController {
  constructor(name: string) {
    super(name);
  }
}

/**
 * @class
 */
class LegendPanelController extends AbstractOverlayController {
  constructor(name: string) {
    super(name);
  }
}

export {ConfigPanelController, LegendPanelController}
