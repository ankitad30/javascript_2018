
/*  3. (No. 100).
       https://projecteuler.net/problem=100

 |--------------------------|-------------------------|----------------------------------------------------------------------|
  DOCUMENTATION:

	- Why I chose this question: Interesting Math problem dint know I will land up doing some math myself which is always 
	                             engaging for me. 

	- How I tackled it:          From the problem- 

								 P(BB) = (15/21)×(14/20) = 1/2.
								 p(BB) = (85/21)×(84/119) = 1/2.

								 so equation to solve is -

								 b *(b-1)/n *(n-1) = 1/2 { b: blue discs, n: total discs (r+b))}

								 Solving this through 2 variable Qaudratic Equation --> https://www.alpertron.com.ar/QUAD.HTM 
								 gives 

								 xn+1 = 3 ⁢xn + 2 ⁢yn - 2 
								 yn+1 = 4 ⁢xn + 3 ⁢yn - 3

	- Comments:                  Using 2 variable quadratic equation. Challengng part was finding a solution to that 
	                             and coming to an undertsanding for the same.

|--------------------------|-------------------------|-----------------------------------------------------------------------|

*/

// Number of blue discs 
var b = 15;

// Total number of discs in the bag
var n = 21;

// Total target
var target = 1e12;


while(n < target) {
	var next_blue = 3 * b + 2 * n - 2;
	var next_n = 4 * b + 3 * n - 3;

	b = next_blue;
	n = next_n;
}

console.log(b);

 


