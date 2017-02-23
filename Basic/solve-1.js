var rect = require('./rectangle-1');

function solveRect(l,b){
	console.log("Solving for "+l+" and "+b);
	if (l<=0 || b<= 0) {
		console.log("Error: length and breadth should be greater than zero");
	}else{
		console.log("Area:"+rect.area(l,b)+"\nPerimeter:"+rect.perimeter(l,b));
	}
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);
solveRect(0,0);