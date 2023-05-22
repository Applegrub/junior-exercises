import flatten from '../tasks/19/19.js';

describe('task 19 test ', () => {
  it('set 1', () => {
    const list = [];

    expect(flatten(list)).equal([]);
  });

  it('set 2', () => {
    const list = [1, 2, [3, 5], [[4, 3], 2]];

    expect(flatten(list)).equal([1, 2, 3, 5, 4, 3, 2]);
  });

  it('set 3', () => {
    const list = [[1, [5], [], [[-3, 'hi']]], 'string', 10, [[[5]]]];

    expect(flatten(list)).equal([1, 5, -3, 'hi', 'string', 10, 5]);
  });

  it('set 4', () => {
    const list = [1, 2, { a: 1 }, [3, 5], 2];

    expect(flatten(list)).equal([1, 2, { a: 1 }, 3, 5, 2]);
  });
});
