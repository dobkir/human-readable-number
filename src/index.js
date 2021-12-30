module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    const numberInString = number.toString();

    if (numberInString.length === 1) {
        return units[number];
    } else if (numberInString.length === 2 && numberInString[0] == 1) {
        return units[number];
    } else if (numberInString.length === 2 && numberInString[1] == 0) {
        return tens[numberInString[0]];
    } else if (numberInString.length === 2 && numberInString[1] != 0) {
        return `${tens[numberInString[0]]} ${units[numberInString[1]]}`;
    } else if (numberInString.length === 3 && numberInString[1] == 0 && numberInString[2] == 0) {
        return `${units[numberInString[0]]} hundred`;
    } else if (numberInString.length === 3 && numberInString[1] == 0 || numberInString[1] == 1) {
        return `${units[numberInString[0]]} hundred ${units[+(numberInString[1] + numberInString[2])]}`;
    } else if (numberInString.length === 3 && numberInString[2] != 0) {
        return `${units[numberInString[0]]} hundred ${tens[numberInString[1]]} ${units[numberInString[2]]}`;
    } else if (numberInString.length === 3 && numberInString[2] == 0) {
        return `${units[numberInString[0]]} hundred ${tens[numberInString[1]]}`;
    }
}
