function area(rect) {
  return rect.width * rect.height;
}

function perimeter(rect) {
  return (rect.width * 2) + (rect.height * 2)
}

function diagonal(rect) {
  return Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
}


module.exports = {
  area: area,
  perimeter: perimeter,
  diagonal: diagonal
};

// 1. Rectangles

// You'll write a number of functions that calculate certain properies of a rectangle object. 
// A rectangle object is just a JavaScript object with two properties - a width and a height. 
// The input will look like this:

// var rectangle = {width: 10, height: 20}

// You're expected to write the following functions:

//     area(rectangle) - returns the area of the rectangle
//     perimeter(rectangle) - returns the perimeter of the rectangle
//     diagonal(rectangle) - returns the length of the rectangle's diagonal
//     isSquare(rectangle) - returns true if the rectangle is a square and false otherwise

// Here's a resource on rectangle diagonals.

// Don't forget to write tests for each function!