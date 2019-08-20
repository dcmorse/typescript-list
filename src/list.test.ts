import { list, List, Cons } from './list';

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

  describe('isEmpty and tail', () => {
    test('list() ends in an empty list', () => {
      expect(list().isEmpty).toBe(true);
    });

    test('list(5) ends in an empty list', () => {
      expect(list(5).isEmpty).toBe(false);
      expect(list(5).tail.isEmpty).toBe(true);
    });

    test('list(5, 6, 7) ends in an empty list', () => {
      expect(list(5, 6, 7).isEmpty).toBe(false);
      expect(list(5, 6, 7).tail.isEmpty).toBe(false);
      expect(list(5, 6, 7).tail.tail.isEmpty).toBe(false);
      expect(list(5, 6, 7).tail.tail.tail.isEmpty).toBe(true);
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
      expect(() => list().head).toThrow(RangeError)
    });
  });

  describe('tail', () => {
    it('Cons works', () => {
      let cons = list('apple');
      expect(cons.tail.isEmpty).toEqual(true);
    })

    it('on empty list explodes', () => {
      expect(() => list().tail).toThrow(RangeError)
    });
  });

  describe('empty list', () => {
    it("prints as 'nil'", () => {
      expect(list().toString()).toEqual('nil');
    });

    it("length 0", () => {
      expect(list().length()).toEqual(0);
    });
  });

  it('new Cons', () => {
    const ll = new Cons(667, list())
    expect(ll.length()).toBe(1);
    expect(ll.head).toBe(667);
    expect(ll.tail.isEmpty).toBe(true);
  });

  describe('isCons', () => {
    it('on empty list', () => {
      expect(list().isCons).toBe(false)
    });

    it('on cons', () => {
      expect(list(5).isCons).toBe(true)
    });
  });


  describe('reduce', () => {
    it('list(1,2).reduce(+,7) => 10', () => {
      expect(list(1,2).reduce((a,b) => a+b, 7)).toBe(10);
    });

    it('list(1,2).reduce(-,7) => 4', () => {
      expect(list(1,2).reduce((a,b) => a-b, 7)).toBe(4);
    });

    it('list(3,7).reduce(*) => 21', () => {
      expect(list(3,7).reduce((a,b) => a*b)).toBe(21);
    });

    it('list(3,7,2).reduce(*) => 42', () => {
      expect(list(3,7,2).reduce((a,b) => a*b)).toBe(42);
    });

    it('nil.reduce(fn) throws TypeError', () => {
      expect(() => list().reduce((a,b) => a && b)).toThrow(TypeError);
    });

    it('list(7).reduce(x+10) => 7', () => {
      expect(list(7).reduce((acc, n)=>n+10)).toBe(7);
    });
  });

  describe('map', () => {
    it('nil.map(whatever) => nil', () => {
      const nil: List<number> = list();
      expect(nil.map(x=>x).isEmpty).toBe(true);
    });

    it('list(5).map(+2) => list(7)', () => {
      expect(list(5).map(x=>x+2)).toEqual(list(7));
    });
  });

  describe('filter', () => {
    it('nil.filter(whatever) => nil', () => {
      const nil = list();
      expect(nil.filter(x=>true)).toEqual(nil);
    });

    it('works', () => {
      const ll = list('lobster', 'dog', 'ape', 'mackerel');
      expect(ll.filter(s => 4 > s.length)).toEqual(list('dog', 'ape'));
    });
  });

  describe('reverse', () => {
    it('works', () => {
      expect(list(1,2,3,4).reverse()).toEqual(list(4,3,2,1));
    });
  });
});
