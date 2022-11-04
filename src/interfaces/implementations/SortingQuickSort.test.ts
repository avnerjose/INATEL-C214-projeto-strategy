import { SortingQuickSort } from "./SortingQuickSort";

describe("SortingQuickSort Class", () => {
  let sorting: SortingQuickSort<number>;

  beforeEach(() => {
    sorting = new SortingQuickSort();
  });

  it("should be able to sort an array", async () => {
    const arrayToSort = [3, 2, 1];
    const result = sorting.sort(arrayToSort, 0, arrayToSort.length - 1);

    expect(result).toEqual([1, 2, 3]);
    expect(sorting.sort(arrayToSort, 0, arrayToSort.length - 1).length).toEqual(
      arrayToSort.length
    );
  });

  it("should work with sorted array", () => {
    const arrayToSort = [1, 2, 3];
    const result = sorting.sort(arrayToSort, 0, arrayToSort.length - 1);

    expect(result).toEqual([1, 2, 3]);
    expect(sorting.sort(arrayToSort, 0, arrayToSort.length - 1).length).toEqual(
      arrayToSort.length
    );
  });
});
