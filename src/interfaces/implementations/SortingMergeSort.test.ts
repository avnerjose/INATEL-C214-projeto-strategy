import { SortingMergeSort } from "./SortingMergeSort";

describe("SortingMergeSort Class", () => {
  let sorting: SortingMergeSort<number>;

  beforeEach(() => {
    sorting = new SortingMergeSort();
  });

  it("should be able to sort an array", async () => {
    const arrayToSort = [3, 2, 1];
    const result = sorting.sort(arrayToSort);

    expect(result).toEqual([1, 2, 3]);
    expect(sorting.sort(arrayToSort).length).toEqual(arrayToSort.length);
  });

  it("should work with sorted array", () => {
    const arrayToSort = [1, 2, 3];
    const result = sorting.sort(arrayToSort);

    expect(result).toEqual([1, 2, 3]);
    expect(sorting.sort(arrayToSort).length).toEqual(arrayToSort.length);
  });
});
