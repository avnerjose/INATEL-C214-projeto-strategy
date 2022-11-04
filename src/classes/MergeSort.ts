import { SortingMergeSort } from "../interfaces/implementations/SortingMergeSort";
import { DataSorting } from "./DataSorting";

class MergeSort<T> extends DataSorting<T> {
  constructor() {
    super();
    this.sortingAlgorithm = new SortingMergeSort();
  }
}

export { MergeSort };
