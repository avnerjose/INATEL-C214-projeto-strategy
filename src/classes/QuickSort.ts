import { SortingQuickSort } from "../interfaces/implementations/SortingQuickSort";
import { DataSorting } from "./DataSorting";

class QuickSort<T> extends DataSorting<T> {
  constructor() {
    super();
    this.sortingAlgorithm = new SortingQuickSort();
  }
}

export { QuickSort };
