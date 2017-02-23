var rect ={
	perimeter: function(x,y){
		return (2*(x+y));
	},

	area: function(x,y){
		return (x*y);
	}
};


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