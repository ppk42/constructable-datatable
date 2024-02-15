/**
 *
 * @class
 */
class ConstructableTable {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  get tableHTML(): string {
    return "<h3>Hello Title</h3>";
  }

  get tableElement(): HTMLElement {
    const el = document.createElement("h3");
    el.innerHTML = "Hello Title";
    return el;
  }
}

export { ConstructableTable };
