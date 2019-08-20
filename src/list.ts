abstract class List<T> {
  head: T;
  tail: List<T>;
  abstract isEmpty(): boolean;
  abstract length(): number;

  toArray(): T[] {
    const a: T[] = [];
    let l: List<T>;
    for (l = this; l.isCons(); l = l.tail)
      a.push(l.head);
    return a;
  }

  isCons(): boolean {
    return !this.isEmpty()
  }

  reduce(reducer, seedValue?) {
    const empty = this.isEmpty();
    if (seedValue !== undefined)
      return empty ? seedValue : this.tail.reduce(reducer, reducer(seedValue, this.head))
    else if (empty)
      throw new TypeError('reduce failed because there was neither a seed value nor any items in the list')
    else
      return this.tail.reduce(reducer, this.head);
  }

  map(fn) {
    return this.reduce((tail, elt) => new Cons(fn(elt), tail), new Nil())
    // alternative, recursive implementation:
    // if (this.isEmpty())
    //   return new Nil();
    // else
    //   return new Cons(fn(this.head), this.tail.map(fn));

  }

  abstract filter(fn): List<T>;

  reverse() {
    return this.reduce((tail, elt) => new Cons(elt, tail), new Nil());
  };
}

export { List }; // for type signatures

function list<T>(...args): List<T> {
  let ll: List<T> = new Nil<T>();
  for (let i = args.length-1; i >= 0; i--)
    ll = new Cons(args[i], ll);
  return ll;
}

export { list };


////////////////////////////////////////////////////////////////

export class Cons<T> extends List<T> {
  head: T;
  tail: List<T>;

  constructor(head: T, tail: List<T>) {
    super();
    this.head = head;
    this.tail = tail;
  };

  isEmpty() {
    return false;
  }

  length() {
    return 1 + this.tail.length()
  };

  filter(fn) {
    let rest = this.tail.filter(fn);
    return fn(this.head) ? new Cons(this.head, rest) : rest;
  };
}

////////////////////////////////////////////////////////////////


class Nil<T> extends List<T> {
  toString() {
    return 'nil';
  }

  isEmpty() {
    return true;
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

  filter(fn) {
    return new Nil<T>(); // making new insteas of using 'this' because of a superstitious fear of memory fragmentation.
  };
}
