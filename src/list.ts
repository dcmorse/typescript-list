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
    if (undefined === seedValue)
      if (this.isEmpty())
        throw new TypeError('reduce failed because there was neither a seed value nor any items in the list')
      else
        return this.tail.reduce(reducer, this.head);
    else if (this.isEmpty())
      return seedValue;
    else
      return this.tail.reduce(reducer, reducer(seedValue, this.head))
  }
  // map()
  // reduce()
}

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
}

