import { ISorting } from "../Sorting";

class SortingSelectionSort<T> implements ISorting<T> {
  sort(list: T[]): T[] {
    const { length } = list;
    let indexMin: number;

    for (let i = 0; i < length - 1; i++) {
      indexMin = i;

      for (let j = i; j < length; j++) {
        if (list[indexMin] > list[j]) {
          indexMin = j;
        }
      }

      if (i !== indexMin) {
        [list[i], list[indexMin]] = [list[indexMin], list[i ]];
      }
    }

    return list;
  }
}

export { SortingSelectionSort };
