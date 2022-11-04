import { SortingBubbleSort } from "../interfaces/implementations/SortingBubbleSort";
import { BubbleSort } from "./BubbleSort";
import { DataSorting } from "./DataSorting";

describe("BubbleSort Class", () => {
  it("should extend from DataSorting", () => {
    const bubble = new BubbleSort();

    expect(bubble).toBeInstanceOf(DataSorting);
  });

  it("should have the bubble sort algorithm", () => {
    const bubble = new BubbleSort();

    expect(bubble.getSortingAlgorithm()).toBeInstanceOf(SortingBubbleSort);
  });
});
