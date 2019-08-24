import { list, map, filter, reduce, length } from './list3';

it('list() returns null', () => {
  expect(list()).toBe(null);
});

it('list("apples") returns a thing where head is "apples"', () => {
  expect(list("apples").head).toBe("apples");
});

it('list("apples") returns a thing where tail is null', () => {
  expect(list("apples").tail).toBe(null);
});

it('list("apples", "bananas") returns a thing where head is "apples"', ()=> {
  expect(list("apples", "bananas").head).toEqual("apples")
});

it('list("apples", "bananas") returns a thing where tail is list("bananas")', ()=> {
  expect(list("apples", "bananas").tail).toEqual(list("bananas"))
});

describe('map', () => {
  it('map(fn, null) returns null', () => {
    expect(map(s=>s.length, null)).toBe(null);
  });

  it('map(Math.abs, list(1,-2,3,-4)) returns list(1,2,3,4)', () => {
    expect(map(Math.abs, list(1,-2,3,-4))).toEqual(list(1,2,3,4));
  });

  it('list("apples", "bananas").map(s=>s.length) returns list(6,7)', ()=> {
    expect(map(s=>s.length, list("apples", "bananas"))).toEqual(list(6,7));
  });
});

describe('filter', () => {
  it('works', () => {
    expect(filter(x => x >= 0, list(1,-2,3,-4))).toEqual(list(1,3));
  });
});

function add(arg1, arg2): number {
  return arg1 + arg2;
}

describe('reduce', () => {
  it('reduce(add, null, 0) => 0', () => {
    expect(reduce(add, null, 0)).toBe(0);
  });

  it('reduce(add, list(5)) => 5', () => {
    expect(reduce(add, list(5))).toBe(5);
  });

  it('reduce(add, list(1,2,3,4), 5) => 15', () => {
    expect(reduce(add, list(1,2,3,4), 5)).toBe(15);
  })

  it('reduce(add, list(1,2,3,4)) => 10', () => {
    expect(reduce(add, list(1,2,3,4))).toBe(10);
  })

  it('reduce(sumStringLengths, list("dog", "cat", "wombat"), 0) => 12', () => {
    expect(reduce((sum,string)=>sum+string.length, list('dog', 'cat', 'wombat'), 0)).toBe(12);
  })
});

describe('length', () => {
  it('works with null', () => {
    expect(length(null)).toBe(0);
  });

  it('length(list(56)) => 1', () => {
    expect(length(list(56))).toBe(1);
  });

  it('length(list("apples", "bananas")) => 2', () => {
    expect(length(list("apples", "bananas"))).toBe(2);
  });
});
