import calculator from '../calculator/calculator'

/**
 * 
 * =========== Scenarios =========== 
 * 
 * • As a user I want to be able to calculate any basic arithmetic operation that can be defined with
 * the positive rational numbers and only the mathematical symbols + , - , * , / . For example, the
 * following operation: 10 + 2 - 5 .
 *
 * • As a user I want get the result of my operation by tapping on the = button.
 *
 * • As a user I want to clear the last input by pressing the c button.
 *
 * • As a user I want to rest the calculator to it's initial state by pressing the ce button so that I can
 * start a new operation.
 */

describe('E2E Operations', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Sum - subtract - Divide - Multiply', async () => {

    // Enter 100
    await calculator.enterNumber(1);
    await calculator.enterNumber(0);
    await calculator.enterNumber(0);
    await expect(calculator.results).toHaveText('100');

    // Tab on subtract button
    await calculator.subtractButton;

    // Enter 20
    await calculator.enterNumber(2);
    await calculator.enterNumber(0);
    await expect(calculator.results).toHaveText('20');

    // Tab on equal button and make user the last operation is correct
    await calculator.equalButton;
    await expect(calculator.results).toHaveText('80');

    // Tab on divide button
    await calculator.divideButton;
    await calculator.enterNumber(4);
    await expect(calculator.results).toHaveText('4');

    // Tab on equal button and make user the last operation is correct
    await calculator.equalButton;
    await expect(calculator.results).toHaveText('20');

    // Tab on CE button
    await calculator.ceButton;

    // Enter 5
    await calculator.enterNumber(5);
    await expect(calculator.results).toHaveText('5');

    // Tab on multiply button
    await calculator.multiplyButton;

    // Enter 6
    await calculator.enterNumber(6);
    await expect(calculator.results).toHaveText('6');

    // Tab on equal button and make user the last operation is correct
    await calculator.equalButton;
    await expect(calculator.results).toHaveText('30');


    // Tab on sum button
    await calculator.sumButton;

    // Enter 1
    await calculator.enterNumber(1);
    await expect(calculator.results).toHaveText('1');

    // Tab on equal button and make user the last operation is correct
    await calculator.equalButton;
    await expect(calculator.results).toHaveText('31');
  })
});
