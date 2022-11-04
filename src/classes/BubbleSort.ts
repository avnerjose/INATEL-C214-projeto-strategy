import { SortingBubbleSort } from "../interfaces/implementations/SortingBubbleSort";
import { DataSorting } from "./DataSorting";

class BubbleSort<T> extends DataSorting<T> {
  constructor() {
    super();
    this.sortingAlgorithm = new SortingBubbleSort<T>();
  }
}

export { BubbleSort };
