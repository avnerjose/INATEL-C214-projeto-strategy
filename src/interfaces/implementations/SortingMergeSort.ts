import { ISorting } from "../Sorting";

class SortingMergeSort<T> implements ISorting<T> {
  sort(list: T[]): T[] {
    if (list.length > 1) {
      const { length } = list;
      const middle = Math.floor(length / 2);
      const left = this.sort(list.slice(0, middle));
      const right = this.sort(list.slice(middle, length));
      list = this.merge(left, right);
    }

    return list;
  }

  merge(left: T[], right: T[]): T[] {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }
}

export { SortingMergeSort };
