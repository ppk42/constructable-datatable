import {GridArea} from '../../src/constable';
let testnumber = 1;

describe("Tests on GridArea", () => {
  test(`${testnumber++}:: GridArea has its id set`, () => {
    let testkey = `grid_area_${testnumber}`;
    const o_u_t = new GridArea(testkey);
    expect(o_u_t).toBeInstanceOf(GridArea);
    expect(o_u_t.id).toBe(testkey);
  });
});


