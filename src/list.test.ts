import { list, nil } from './list';

describe('List', () => {
  describe('constructor and toArray()', () => {
    test('returns nil for no args', () => {
      expect(list()).toBe(nil);
    });
    test('returns [56] for list(56).toArray()', () => {
      const l = list(56);
      expect(l.toArray()).toEqual([56]);
    })
    test('returns [5,6,7] for list(5,6,7)', () => {
      const l = list(5,6,7);
      expect(l.toArray()).toEqual([5,6,7]);
    });
  });

  describe('length and nil', () => {
    xit('write tests', () => {})
  });

  describe('length', ()=> {
    xit('write tests', () => {})

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
