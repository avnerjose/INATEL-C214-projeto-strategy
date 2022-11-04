import { SortingMergeSort } from "../interfaces/implementations/SortingMergeSort";
import { MergeSort } from "./MergeSort";
import { DataSorting } from "./DataSorting";

describe("MergeSort Class", () => {
  it("should extend from DataSorting", () => {
    const merge = new MergeSort();

    expect(merge).toBeInstanceOf(DataSorting);
  });

  it("should have the merge sort algorithm", () => {
    const merge = new MergeSort();

    expect(merge.getSortingAlgorithm()).toBeInstanceOf(SortingMergeSort);
  });
});
