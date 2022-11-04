import { SortingSelectionSort } from "../interfaces/implementations/SortingSelectionSort";
import { SelectionSort } from "./SelectionSort";
import { DataSorting } from "./DataSorting";

describe("SelectionSort Class", () => {
  it("should extend from DataSorting", () => {
    const selection = new SelectionSort();

    expect(selection).toBeInstanceOf(DataSorting);
  });

  it("should have the Selection sort algorithm", () => {
    const selection = new SelectionSort();

    expect(selection.getSortingAlgorithm()).toBeInstanceOf(
      SortingSelectionSort
    );
  });
});
