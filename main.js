let nums = process.argv;
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
for (let i = 0; i < nums.length; i++) {
    console.log(Math.floor(nums[i]));
}
