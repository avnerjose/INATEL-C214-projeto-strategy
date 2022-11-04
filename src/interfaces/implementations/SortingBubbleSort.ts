import { ISorting } from "../Sorting";

class SortingBubbleSort<T> implements ISorting<T> {
  sort(list: T[]) {
    let end = list.length;
    let keepGoing = true;

    do {
      keepGoing = false;

      for (let i = 0; i < end - 1; i++)
        if (list[i] > list[i + 1]) {
          [list[i], list[i + 1]] = [list[i + 1], list[i]];
          keepGoing = true;
        }
    } while (keepGoing);

    return list;
  }
}

export { SortingBubbleSort };
