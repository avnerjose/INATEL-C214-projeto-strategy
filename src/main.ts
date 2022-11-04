import { BubbleSort } from "./classes/BubbleSort";
import { DataSorting } from "./classes/DataSorting";
import { MergeSort } from "./classes/MergeSort";
import { QuickSort } from "./classes/QuickSort";
import { SelectionSort } from "./classes/SelectionSort";

let sorting: DataSorting<number>;
let arrayToSort = [10, 2, 5, 0, 6, 20, 14];
let result: number[] = [];

sorting = new BubbleSort();
result = sorting.getSortingAlgorithm().sort(arrayToSort);

console.log("Bubble Sort");
console.log(result);

sorting = new QuickSort();
result = sorting
  .getSortingAlgorithm()
  .sort(arrayToSort, 0, arrayToSort.length - 1);

console.log("Quick Sort");
console.log(result);

sorting = new MergeSort();
result = sorting
  .getSortingAlgorithm()
  .sort(arrayToSort, 0, arrayToSort.length - 1);

console.log("Merge Sort");
console.log(result);

sorting = new SelectionSort();
result = sorting.getSortingAlgorithm().sort(arrayToSort);

console.log("Selection Sort");
console.log(result);
