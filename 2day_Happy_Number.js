# Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.
/**

 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n == 1 || n == 7){
        return true;
    }
    if(n <= 9){
        return false;
    }

    let nums = n.toString().split('');
    
    let c = 0;
    nums.map((num,index)=>{
        c+=Math.pow(parseInt(num),2);
    });
    
    if(c == 1 || c == 7){
        return true;
    }
    if(c <= 9){
        return false;
    }

    return isHappy(c);
};
