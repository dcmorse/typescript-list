

export interface List<T> {
  isEmpty: boolean;
  head: T;
  tail: List<T>;

  map<U>(fn: (t: T) => U): List<U>;
  // map(fn: Function): List<any>;
  filter(fn: (T)=>boolean): List<T>;
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

  map(fn: Function) {
    return new Cell(fn(this.head), this.tail.map(fn));
  }

  filter(fn) {
    if (fn(this.head))
      return new Cell(this.head, this.tail.filter(fn));
    else
      return this.tail.filter(fn);
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

  map(fn: Function) {
    return this;
  }

  filter(fn) {
    return this;
  }
}

export const nil = Object.freeze(new Nil());

export function list<T>(...args): List<T> {
  let l = nil as List<T>;
  for (let i = args.length-1; i >= 0; i--)
    l = new Cell(args[i], l);
  return l;
}

