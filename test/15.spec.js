import magic from '../tasks/15/15.js';

describe('task 15 test ', () => {
  it('calculate sum', () => {
    expect(magic() + 0).equal(0);
    expect(magic() + 1).equal(1);
    expect(magic(5, 2, -8) + 2).equal(1);
    expect(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8).equal(30);
    expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7).equal(20);
  });

  it('shouldn\'t have global state', () => {
    expect(magic() + 0).equal(0);
    expect(magic() + 1).equal(1);

    magic(4, 5);

    expect(magic(5, 2, -8) + 2).equal(1);
    expect(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8).equal(30);
    expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7).equal(20);

    magic(1, 3, 4);
    expect(magic(5) + 1).equal(6);
  });

  it('shouldn\'t have shared state', () => {
    const func = magic(4, 5);

    expect(func(5) + 1).equal(15);
    expect(func(5) + 1).equal(15);
  });
});
