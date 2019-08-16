import { list, nil } from './list';

describe('List', () => {
  describe('constructor and toArray()', () => {
    test('returns nil for no args', () => {
      expect(list()).toBe(nil);
    });
    test('returns (56) for list(56)', () => {
      const l = list(56);
      expect(l.length()).toBe(1);
      expect(l.head).toBe(56);
      expect(l.tail).toBe(nil);
    })
    test('returns (5,6,7) for list(5,6,7)', () => {
      let l = list(5,6,7);
      expect(l.length()).toBe(3);
      expect(l.head).toBe(5);
      l = l.tail;
      expect(l.head).toBe(6);
      l = l.tail;
      expect(l.head).toBe(7);
      l = l.tail;
      expect(l).toBe(nil);
    })
  })

  describe('head', () => {
    it('Cons works', () => {
      let cons = list('apple');
      expect(cons.head).toEqual('apple');
    })
    it('nil explodes', () => {
      expect(() => nil.head).toThrow(RangeError)
    });
  });

  describe('tail', () => {
    it('Cons works', () => {
      let cons = list('apple');
      expect(cons.tail).toEqual(nil);
    })
    it('nil explodes', () => {
      expect(() => nil.tail).toThrow(RangeError)
    });
  });

  describe('nil', () => {
    it("prints as 'nil'", () => {
      expect(nil.toString()).toEqual('nil');
    });
    it("length 0", () => {
      expect(nil.length()).toEqual(0);
    });
  })
})
