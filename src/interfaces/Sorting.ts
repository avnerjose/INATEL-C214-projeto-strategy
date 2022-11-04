interface ISorting<T> {
  sort: (list: T[], start?: number, end?: number) => T[];
}

export { ISorting };
