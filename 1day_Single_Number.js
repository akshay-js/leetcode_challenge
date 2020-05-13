
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let tmp = {};
nums.forEach((row) => {
	if(tmp[row]){
		tmp[row]++;
	}else{
		tmp[row] = 1;
	}
});
for(let key in tmp){
	if(tmp[key] == 1){
		return key;
	}
}
	
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = nums[0]; 
    for (let i = 1; i < nums.length; i++) {
        res = res ^ nums[i];
		console.log(res);
    }
        

    return res; 
};
