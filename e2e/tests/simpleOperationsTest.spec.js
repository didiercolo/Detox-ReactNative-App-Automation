import calculator from '../calculator/calculator'

describe('Simple Operations', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Sum -> 2 + 7 = 9', async () => {
    await calculator.sum(2, 7);
    await expect(calculator.results).toHaveText('9');
  })

  it('subtract -> 9 - 8 = 1', async () => {
    await calculator.subtract(9, 8);
    await expect(calculator.results).toHaveText('1');
  })

  it('Divide -> 8 / 2 = 4', async () => {
    await calculator.divide(8, 2);
    await expect(calculator.results).toHaveText('4');
  })

  it('Multiply -> 7 * 7 = 49', async () => {
    await calculator.multiply(7, 7);
    await expect(calculator.results).toHaveText('49');
  })

});


