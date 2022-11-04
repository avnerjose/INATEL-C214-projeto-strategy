import { SortingSelectionSort } from "../interfaces/implementations/SortingSelectionSort";
import { DataSorting } from "./DataSorting";

class SelectionSort<T> extends DataSorting<T> {
  constructor() {
    super();
    this.sortingAlgorithm = new SortingSelectionSort();
  }
}

export { SelectionSort };
