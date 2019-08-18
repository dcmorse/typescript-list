abstract class List<T> {
  head: T;
  tail: List<T>;
  abstract length(): number;
  abstract toArray(): T[];
  // prepend(): (<T>) => List<T>;
  // map()
  // reduce()
}

function list<T>(...args): List<T> {
  let ll: List<T> = nil;
  for (let i = args.length-1; i >= 0; i--)
    ll = new Cons(args[i], ll);
  return ll;
}

export { list };

export class Cons<T> extends List<T> {
  head: T;
  tail: List<T>;

  constructor(head: T, tail: List<T>) {
    super();
    this.head = head;
    this.tail = tail;
  };

  length() {
    return 1 + this.tail.length()
  };

  toArray(): T[] {
    const a: T[] = [];
    let l: List<T>;
    for (l = this; l != nil; l = l.tail)
      a.push(l.head);
    return a;
  }
}

class Nil<T> extends List<T> {
  toString() {
    return 'nil';
  }
  length() {
    return 0;
  }
  get head(): never {
    throw new RangeError('Attempt to take the head of an empty list.')
  }
  get tail(): never {
    throw new RangeError('Attempt to take the tail of an empty list.');
  }
  toArray(): [] {
    return [];
  }
}

export const nil = new Nil()
