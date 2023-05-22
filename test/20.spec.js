import compareVersion from '../tasks/20/20.js';

describe('task 20 test ', () => {
  it('compare version', () => {
    expect(compareVersion('0.1', '0.2')).equal(-1);
    expect(compareVersion('0.2', '0.1')).equal(1);
    expect(compareVersion('4.2', '4.2')).equal(0);
    expect(compareVersion('0.2', '0.12')).equal(-1);
    expect(compareVersion('3.2', '4.12')).equal(-1);
    expect(compareVersion('3.2', '2.12')).equal(1);
    expect(compareVersion('10.2', '2.12')).equal(1);
  });
})
