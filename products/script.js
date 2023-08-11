/* Author: Kiro */

//  Daily Coding Problem
/*  Given an array of integers, 
    return a new array such that each element 
    at index i of the new array is the product 
    of all the numbers in the original array 
    except the one at i. Dont use division*/

function productExceptSelf(nums) {
    // get the length of the array
    const n = nums.length;
    
    // Initialize arrays for left and right products
    // We fill them with 1 because this will not change the result of the products
    // if there are no elements to the left or right of the current element.
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    
    // Calculate left products
    // This loop will calculate the product of all the elements to the left of the current element
    // and store it in the leftProducts array.
    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
        leftProduct *= nums[i - 1];
        leftProducts[i] = leftProduct;
    }
    
    // Calculate right products
    // This loop will calculate the product of all the elements to the right of the current element
    // and store it in the rightProducts array.
    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        rightProducts[i] = rightProduct;
    }
    
    // Calculate product except self
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(leftProducts[i] * rightProducts[i]);
    }
    
    return result;
}


const input1 = [1, 2, 3, 4, 5];
console.log(productExceptSelf(input1));

const input2 = [3, 2, 1];
console.log(productExceptSelf(input2));
