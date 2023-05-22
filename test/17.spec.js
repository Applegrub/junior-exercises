import getLongestLength from '../tasks/17/17.js';


it('task 17 test ', () => {
  expect(getLongestLength('jabjcdel')).equal(7);
  expect(getLongestLength('abcddef')).equal(4);
  expect(getLongestLength('abbccddeffg')).equal(3);
  expect(getLongestLength('abcd')).equal(4);
  expect(getLongestLength('1234561qweqwer')).equal(9);
  expect(getLongestLength('1234561qweqwerqer')).equal(9);
  expect(getLongestLength('')).equal(0);
});
