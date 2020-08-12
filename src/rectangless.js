var rectA = {x: 5, y: 20, width: 10, height: 15};
var rectB = {x: 10, y: 15, width: 15, height: 10};
var area = {min: 0, max: 100};
var overlap = rectOverlap(rectA,rectB);

alert("Does rectA and rectB overlap? " + overlap);
if(overlap){
    if(rectA.y >= rectB.y){
        if(increaseY(rectA.width, rectB.y + rectB.height, area.max)){
            rectA.y = rectB.y + rectB.height + 1;
    }

else if (rectA.y - rectB.height > area.min){
    rectB.y = rectA.y - rectB.height;
    }
}

else{
    if(increaseY(rectB.width, rectA.y + rectA.height, area.max)){
        rectB.y = rectA.y + rectA.height + 1;
        }
        else if (rectB.y - rectA.height > area.min){
rectA.y = rectB.y - rectA.height;
        }
    }
}
alert("Does rectA and rectB overlap? " + rectOverlap(rectA,rectB));

function increaseY(width, bottomEdge, Max){
    return (bottomEdge + width < Max);
}

function valueInRange(value, min, max){
return (value <= max) && (value >= min);
}

function rectOverlap(A, B){
var xOverlap = valueInRange(A.x, B.x, B.x + B.width) ||
valueInRange(B.x, A.x, A.x + A.width);
var yOverlap = valueInRange(A.y, B.y, B.y + B.height) ||
valueInRange(B.y, A.y, A.y + A.height);
return xOverlap && yOverlap;
}