// import from index file ensures that all tested
// artifacts are exported. The test only have to make sure that
// the objects are instanciable
import {
  ConfigPanelController,
  LegendPanelController,
  TableBuilder,
  GridArea,
} from "../src/constable";

// variable name o_u_t means object under test
let testnumber = 1;

describe("Structural Tests Controller", () => {
  // TEST_KEY is used for id or name
  test(`${testnumber++}:: ConfigOverlayController is instanciable and has valid id`, () => {
    let testkey = `test_object_${testnumber}`;
    const o_u_t = new ConfigPanelController(testkey);
    expect(o_u_t).toBeInstanceOf(ConfigPanelController);
    expect(o_u_t.name).toBe(testkey);
  });
  test(`${testnumber++}:: LegendOverlayController is instanciable and has valid id`, () => {
    let testkey = `test_object_${testnumber}`;
    const o_u_t = new LegendPanelController(testkey);
    expect(o_u_t).toBeInstanceOf(LegendPanelController);
    expect(o_u_t.name).toBe(testkey);
  });
});

describe("Structural Tests Builder", () => {
  test(`${testnumber++}:: TableBuilder is instanciable and has valid name`, () => {
    let testkey = `test_object_${testnumber}`;
    const o_u_t = new TableBuilder(testkey);
    expect(o_u_t).toBeInstanceOf(TableBuilder);
    expect(o_u_t.name).toBe(testkey);
  });
});

describe("Structural Tests Areas", () => {
  test(`${testnumber++}:: GridArea is instanciable and has valid id`, () => {
    let testkey = `test_object_${testnumber}`;
    const o_u_t = new GridArea(testkey);
    expect(o_u_t).toBeInstanceOf(GridArea);
    expect(o_u_t.id).toBe(testkey);
  });
});
