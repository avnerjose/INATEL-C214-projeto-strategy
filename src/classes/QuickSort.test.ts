import { SortingQuickSort } from "../interfaces/implementations/SortingQuickSort";
import { QuickSort } from "./QuickSort";
import { DataSorting } from "./DataSorting";

describe("QuickSort Class", () => {
  it("should extend from DataSorting", () => {
    const quick = new QuickSort();

    expect(quick).toBeInstanceOf(DataSorting);
  });

  it("should have the Quick sort algorithm", () => {
    const quick = new QuickSort();

    expect(quick.getSortingAlgorithm()).toBeInstanceOf(SortingQuickSort);
  });
});
