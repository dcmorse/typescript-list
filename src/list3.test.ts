import { list, nil } from './list3';

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

it('list("apples", "banannas") returns a thing where head is "apples"', ()=> {
  expect(list("apples", "bananas").head).toEqual("apples")
});

it('list("apples", "banannas") returns a thing where tail is list("bananas")', ()=> {
  expect(list("apples", "bananas").tail).toEqual(list("bananas"))
});
