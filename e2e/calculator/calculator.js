/**
 * This class contains the logic to manipulate calculator elements and operations
 */
class calculator {

    /**
     * Calculator Elements
     */
    get sumButton() { return element(by.id('input-button-+')).tap() }

    get subtractButton() { return element(by.id('input-button--')).tap() }

    get divideButton() { return element(by.id('input-button-/')).tap() }

    get multiplyButton() { return element(by.id('input-button-*')).tap() }

    get equalButton() { return element(by.id('input-button-=')).tap() }

    get cButton() { return element(by.id('input-button-c')).tap() }

    get ceButton() { return element(by.id('input-button-ce')).tap() }

    get results() { return element(by.id('display-text')) }


    /**
     * Allows tab on any number sent as reference
     * 
     * Limitations:
     * It only allows numbers from 0 to 9. 
     * Pending implementation to allow higher numbers
     * 
     * @param {*} number Number sent to be entered in the calculator
     */
    async enterNumber(number) {
        return await element(by.id(`input-button-${number}`)).tap();
    }

    /**
     * Allows perfom a sum using the values sent as paremeters
     * @param {Number} firstNum First number in sum operation
     * @param {Number} secondNum Second number in sum operation
     */
    async sum(firstNum, secondNum) {
        await this.enterNumber(firstNum);
        await this.sumButton;
        await this.enterNumber(secondNum)
        await this.equalButton;
    }

    /**
     * Allows perfom a subtract using the values sent as paremeters
     * @param {Number} firstNum First number in subtract operation
     * @param {Number} secondNum Second number in subtract operation
     */
    async subtract(firstNum, secondNum) {
        await this.enterNumber(firstNum);
        await this.subtractButton;
        await this.enterNumber(secondNum)
        await this.equalButton;
    }

    /**
     * Allows perfom a multiply using the values sent as paremeters
     * @param {Number} firstNum First number in multiply operation
     * @param {Number} secondNum Second number in multiply operation
     */
    async multiply(firstNum, secondNum) {
        await this.enterNumber(firstNum);
        await this.multiplyButton;
        await this.enterNumber(secondNum)
        await this.equalButton;
    }

    /**
     * Allows perfom a divide using the values sent as paremeters
     * @param {Number} firstNum First number in divide operation
     * @param {Number} secondNum Second number in divide operation
     */
    async divide(firstNum, secondNum) {
        await this.enterNumber(firstNum);
        await this.divideButton;
        await this.enterNumber(secondNum)
        await this.equalButton;
    }
}

export default new calculator()