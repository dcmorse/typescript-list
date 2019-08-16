interface List<T> {
  length(): number;
  head: T;
  tail: List<T>;
  // prepend(): (<T>) => List<T>;
  // toArray()
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

export class Cons<t> {
  head: t;
  tail: List<t>;

  constructor(head: t, tail: List<t>) {
    this.head = head;
    this.tail = tail;
  };

  length() {
    return 1 + this.tail.length()
  };
}

class Nil {
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
}

export const nil = new Nil()
