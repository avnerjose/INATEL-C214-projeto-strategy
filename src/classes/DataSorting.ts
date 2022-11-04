import { ISorting } from "../interfaces/Sorting";

abstract class DataSorting<T> {
  protected sortingAlgorithm: ISorting<T>;

  public getSortingAlgorithm() {
    return this.sortingAlgorithm;
  }
}

export { DataSorting };
