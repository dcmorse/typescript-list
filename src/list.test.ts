import { list, nil } from './list';

describe('List', () => {
  describe('constructor and toArray()', () => {
    test('list().toArray() returns []', () => {
      expect(list().toArray()).toEqual([]);
    })

    test('returns [56] for list(56).toArray()', () => {
      const l = list(56);
      expect(l.toArray()).toEqual([56]);
    })

    test('returns [5,6,7] for list(5,6,7)', () => {
      const l = list(5,6,7);
      expect(l.toArray()).toEqual([5,6,7]);
    });
  });

  describe('nil is at the end of constructor return values', () => {
    test('list() returns nil', () => {
      expect(list()).toBe(nil);
    });

    test('list(5).tail returns nil', () => {
      expect(list(5).tail).toBe(nil);
    });

    test('list(5, 6, 7).tail.tail.tail returns nil', () => {
      expect(list(5, 6, 7).tail.tail.tail).toBe(nil);
    });
  });

  describe('length', ()=> {
    it('list().length() is 0', () => {
      expect(list().length()).toBe(0);
    });

    it('list("apples").length() is 1', () => {
      expect(list("apples").length()).toBe(1);
    });

    it('list(10, 20, 30).length() is 3', () => {
      expect(list().length()).toBe(0);
    });
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
