/* Autor: Kiro */

/* Autor: Kiro */
/* My Solution to Daily Coding Problem 09.08.2023*/

function addNumbersToReachK(nums, x) {
    let seen = new Set();
    for (let num of nums) { 
        if (seen.has(x - num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

let nums = [10, 15, 3, 7];
let x = 17;

if(addNumbersToReachK(nums, x)) {
    console.log("True");
} else {
    console.log("False");
}