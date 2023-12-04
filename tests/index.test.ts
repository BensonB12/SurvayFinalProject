import {tuples, interprilatingStrings, advancedMathmatics} from '../src/index';

describe('testing index file', () => {
  test('InterpilatingStrings works, should be Hello World', () => {
    expect(interprilatingStrings()).toBe('Hello World!');
  });
});

describe('testing index file', () => {
  test('a = 3, b = 2, c = 1 should be 18', () => {
    expect(advancedMathmatics(3, 2, 1)).toBe(18);
  });
});

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(tuples('benson', 21)).toBe(['benson', 21]);
  });
});