
/*  1. (No. 52).
       https://projecteuler.net/problem=52

 |--------------------------|-------------------------|---------------------------------------------------------|
  DOCUMENTATION:

	- Why I chose this question: Started with problems greater than 50 and this caught my attention
	                             Interesting Math problem 
	- How I tackled it:          Started with brute force and for each number calculated its first 6 
	                             multiples and check if they have same digits. Starts with 1 and checks every number 
	                             one by one till the time it finds all permuted multiples.

	                             Optimized 
	                             1. Exit conditon if digits in orginal !== digits in multiples(x,2x,3x,4x,5x,6x)
	                             2. The answer(minimum number) should be a 6 digit for all possible permute combinations to be same
	                             
	- Comments:                  Using simple while loop . Can set val as any starting number to find in that range.
|--------------------------|-------------------------|----------------------------------------------------------|

*/

 var val = 1 ;
 while(true) {

 	val ++;
 	if (val.toString().substr(0, 1) != '1') {
 		continue;
 	}

 	let digit = val.toString().split('').sort().join('');
 	let isMatch = true;
    // Check for all multiples upto 6
 	for (let i = 2; i <= 6; i++) {
 		let result = val * i;
 		let digitForResult = result.toString().split('').sort().join('');

 		if (digit !== digitForResult) {
 			isMatch = false;
 			 ;
 		}
 	}

 	if(isMatch) {
 		break;
 	}

 }

 console.log(val);



