

interface List<T> {
  isEmpty: boolean;
  head: T;
  tail: List<T>;
}


class Cell<T> implements List<T> {
  head: T;
  tail: Cell<T>;

  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  get isEmpty() {
    return false;
  }
}

class Nil<T> implements List<T> {
  get isEmpty() {
    return true;
  }

  get head(): never {
    throw new RangeError('Attempt to take the head of an empty list.')
  }

  get tail(): never {
    throw new RangeError('Attempt to take the tail of an empty list.')
  }
}

export const nil = Object.freeze(new Nil());

export function list<T>(...args): List<T> {
  let l = nil as List<T>;
  for (let i = args.length-1; i >= 0; i--)
    l = new Cell(args[i], l);
  return l;
}

