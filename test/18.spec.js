import chunk from '../tasks/18/18.js';

describe('task 18 test ', () => {
  it('should works', () => {
    const result1 = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result1).equal([['a', 'b'], ['c', 'd']]);

    const result2 = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result2).equal([['a', 'b', 'c'], ['d']]);

    const result3 = chunk([], 4);
    expect(result3).equal([]);

    const result4 = chunk(['a'], 2);
    expect(result4).equal([['a']]);

    const result5 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);
    expect(result5).equal([['a', 'b'], ['c', 'd'], ['e', 'f']]);
  });
});
