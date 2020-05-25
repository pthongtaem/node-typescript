import { sum } from './sum';

describe('sum number function', () => {
  it('should be a function', () => {
    expect(sum).toEqual(expect.any(Function));
  });

  it('should sum', () => {
    expect(sum(1, 1)).toEqual(2);
    expect(sum(1, 2)).toEqual(3);
  });
});
