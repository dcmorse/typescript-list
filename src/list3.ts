class Cell<T> {
  head: T;
  tail: Cell<T>;

  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  // map(fn: Function) {
  //   return new Cell(fn(this.head), this.tail.map(fn));
  // }

  // filter(fn) {
  //   if (fn(this.head))
  //     return new Cell(this.head, this.tail.filter(fn));
  //   else
  //     return this.tail.filter(fn);
  // }
}

export function list<T>(...args): Cell<T> {
  let l = null as Cell<T>;
  for (let i = args.length-1; i >= 0; i--)
    l = new Cell(args[i], l);
  return l;
}

export function map(fn, list) {
  if (list)
    return new Cell(fn(list.head), map(fn, list.tail));
  else
    return null;
}

export function filter(fn, list) {
  if (list === null)
    return null;
  else if (fn(list.head))
    return new Cell(list.head, filter(fn, list.tail));
  else
    return filter(fn, list.tail);
}

//  map<U>(fn: (t: T) => U): List<U>;

// reduce(fn, list, seed) => fn-result
function reduce<T,U>(fn: (acc: U, T) => U, list: Cell<T>, seed: U);
// U is same type as T
function reduce<T>(fn: (acc: T, T) => T, list: Cell<T>);

function reduce<T,U>(fn: (acc: U, T) => U, list: Cell<T>, seed?: U) {
  if (typeof seed === "undefined") {
    if (list)
      return reduce(fn, list.tail, list.head as unknown as U);
    else
      throw new Error("can't reduce without something in the list")
  } else {
    if (list)
      return reduce(fn, list.tail, fn(seed, list.head))
    else
      return seed;
  }
}

export { reduce };

export function length<T>(list: Cell<T>): Number {
  return reduce((x,_)=>x+1, list, 0);
}
