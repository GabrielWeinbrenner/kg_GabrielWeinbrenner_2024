let nums = process.argv.slice(2);
const numbersToWords = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
};

function numArrayToWords(nums) {
    let finalStatement = "";
    for (let i = 0; i < nums.length; i++) {
        let numArray = nums[i].toString().split("");

        for (let j = 0; j < numArray.length; j++) {
            finalStatement += numbersToWords[numArray[j]];
        }
        finalStatement += i == nums.length - 1 ? "" : ",";
    }
    return finalStatement;
}

console.log(numArrayToWords(nums));
