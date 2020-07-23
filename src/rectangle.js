var a = {x1: 5, y1: 20, x2: 10, y2: 15};
var b = {x1: 10, y1: 15, x2: 15, y2: 10};

// Check if rectangle a overlaps rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function overlaps(a, b) {
	// no horizontal overlap
	if (a.x1 >= b.x2 || b.x1 >= a.x2) return false;

	// no vertical overlap
	if (a.y1 >= b.y2 || b.y1 >= a.y2) return false;

	return true;
}

if (overlaps(a, b)) { 
    console.log("True"); 
} else { 
    console.log("False"); 
} 
