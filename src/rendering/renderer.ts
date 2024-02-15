import { AbstractLayout } from "../buildingblocks/layouts";
import { ConstructableTable } from "../buildingblocks/table";

/**
 */
interface Renderer {
  id: string;

  renderTableFrame: (
    table: ConstructableTable,
    layout: AbstractLayout,
  ) => string;

  renderTableCell: (
    table: ConstructableTable,
    cell: AbstractCellType<any>,
  ) => string;
}

export { Renderer };
