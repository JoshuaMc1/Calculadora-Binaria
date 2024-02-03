/**
 * The binaryToDecimal function converts a binary string to its decimal equivalent.
 * @param binaryString - A string representing a binary number.
 * @returns the decimal value of the given binary string.
 */
const binaryToDecimal = (binaryString) => {
    return parseInt(binaryString, 2);
};

/**
 * The binaryToOctal function converts a binary string to its octal representation.
 * @param binaryString - A string representing a binary number.
 * @returns The octal value of the given binary string.
 */
const binaryToOctal = (binaryString) => {
    const decimalValue = binaryToDecimal(binaryString);

    const octalValue = decimalValue.toString(8);

    return octalValue;
};

const binaryToHexadecimal = (binaryString) => {
    const decimalValue = binaryToDecimal(binaryString);

    const hexadecimalValue = decimalValue.toString(16).toUpperCase();

    return hexadecimalValue;
}

/**
 * The function checks if a given string is a valid binary number.
 * @param binaryString - The `binaryString` parameter is a string that represents a binary number.
 * @returns a boolean value indicating whether the input binaryString is a valid binary string or not.
 */
const isBinary = (binaryString) => {
    return /^[01]+$/.test(binaryString);
};

/**
 * Export the functions.
 * @returns binaryToDecimal, binaryToOctal, and isBinary
 * @description The functions are exported to be used in other modules.
 * @example
 * import { binaryToDecimal, binaryToOctal, isBinary } from "./helper";
 */
export { binaryToDecimal, binaryToOctal, binaryToHexadecimal, isBinary };
