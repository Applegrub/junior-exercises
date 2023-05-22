import { removeZeros } from '../tasks/4/4.js';
import { assert } from 'chai';
describe("task 4 test", () => {
    it("test", () => {
  const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
      solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
  
      assert.strictEqual(JSON.stringify(removeZeros(input)), JSON.stringify(solution));
    });
  });
  