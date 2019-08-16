import { List, nil } from './list';

describe('constructor', () => {
  test('constructor with ', () => {
    expect(new List()).toBe(nil);
  });
})

describe('nil', () => {
  test("prints as 'nil'", () => {
    expect('' + nil).toEqual('nil');
  })
})
