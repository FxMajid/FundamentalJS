var a = {x1: 5, y1: 20, x2: 10, y2: 15};
var b = {x1: 10, y1: 15, x2: 15, y2: 10};

// Setiap object (a and b) memiliki 2 properties untuk merepresentasikan
// pojok kiri atas (x1, y1) dan pojok kanan atas (x2, y2).
function overlaps(a, b) {
	// tidak ada tumpang tindih horizontal
	if (a.x1 >= b.x2 || b.x1 >= a.x2) return false;

	// tidak ada tumpang tindih vertical
	if (a.y1 >= b.y2 || b.y1 >= a.y2) return false;

	return true;
}

//output
if (overlaps(a, b)) { 
    console.log("True"); 
} else { 
    console.log("False"); 
} 
