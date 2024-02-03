// import from index file ensures that all tested 
// artifacts are exported. The test only have to make sure that
// the objects are instanciable
import {TableBuilder, GridArea} from '../src/constable';


describe('Structural Tests', () => {
  // o_u_t :=: object under test
  test('TableBuilder is instanciable', () => {
    const o_u_t = new TableBuilder("");
    expect(o_u_t).toBeInstanceOf(TableBuilder);
  });
  test('GridArea is instanciable', () => {
    const o_u_t = new GridArea("");
    expect(o_u_t).toBeInstanceOf(GridArea);
  });
});

describe('key fields work as expected', () => {
  // o_u_t means object under test
  // TEST_KEY is used for id or name
  const TEST_KEY = "test1";
  test('TableBuilder has valid name', () => {
    const o_u_t = new TableBuilder(TEST_KEY);
    expect(o_u_t).toBeInstanceOf(TableBuilder);
    expect(o_u_t.name).toBe(TEST_KEY)
  });
  test('GridArea has valid id', () => {
    const o_u_t = new GridArea(TEST_KEY);
    expect(o_u_t).toBeInstanceOf(GridArea);
    expect(o_u_t.id).toBe(TEST_KEY)
  });
});
