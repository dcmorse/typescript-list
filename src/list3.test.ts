import { list, List, nil } from './list3';

it('list() returns null', () => {
  const l  = list();
  expect(l).toBe(nil);
});

it('list("apples") returns a thing where head is "apples"', () => {
  expect(list("apples").head).toBe("apples");
});

it('list("apples") returns a thing where tail is null', () => {
  expect(list("apples").tail).toBe(nil);
});

it('list("apples", "bananas") returns a thing where head is "apples"', ()=> {
  expect(list("apples", "bananas").head).toEqual("apples")
});

it('list("apples", "bananas") returns a thing where tail is list("bananas")', ()=> {
  expect(list("apples", "bananas").tail).toEqual(list("bananas"))
});

describe('map', () => {
  it('nil.map() returns nil', () => {
    const l : List<string> = nil
    expect(l.map(s=>s.length)).toBe(nil);
  })

  it('list(1,-2,3,-4).map(Math.abs) returns list(1,2,3,4)', () => {
    expect(list(1,-2,3,-4).map(Math.abs)).toEqual(list(1,2,3,4));
  })

  it('list("apples", "bananas").map((s)=>s.length) returns list(6,7)', ()=> {
    expect(list<string>("apples", "bananas").map(s=>s.length)).toEqual(list(6,7));
  })
})

describe('filter', () => {
  it('works', () => {
    const l = list(1,-2,3,-4);
    expect(l.filter(x => x >= 0)).toEqual(list(1,3));
  })
})
