import { ISorting } from "../Sorting";

class SortingQuickSort<T> implements ISorting<T> {
  sort(list: T[], start: number, end: number): T[] {
    let left = start;
    let right = end;
    let pivot = list[Math.round((left + right) / 2)];

    do {
      while (list[left] < pivot) {
        left++;
      }
      while (list[right] > pivot) {
        right--;
      }

      if (left <= right) {
        [list[left], list[right]] = [list[right], list[left]];
        left++;
        right--;
      }
    } while (left <= right);

    if (right - start >= 0) this.sort(list, start, right);
    if (end - left >= 0) this.sort(list, left, end);

    return list;
  }
}

export { SortingQuickSort };
