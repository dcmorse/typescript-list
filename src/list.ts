class Cell<T> {
  head: T;
  tail: Cell<T>;

  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
}

export const list = (...args) => {
  let acc = null;
  for (let i=args.length-1; i>=0; i--)
    acc = new Cell(args[i], acc);
  return acc;
}

export const map = (fn, l) => {
  if (l === null)
    return null;
  else
    return new Cell(fn(l.head), map(fn, l.tail));
}
