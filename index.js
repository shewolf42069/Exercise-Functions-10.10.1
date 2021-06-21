const input = require('readline-sync');

 let lineSize = Number(input.question("What number of hashes would you like? "));


function makeLine(lineSize) {
let hashLine = "";

  for (let i = 1; i <= lineSize; i++) {
    hashLine = hashLine + "#";
  }
  return hashLine;
}



//**************** */

let sizeSquare = Number(input.question("How big of a square would you like? (? x ?)"));
let fullSquare = (sizeSquare);

function makeSquare(sizeSquare) {
let line = "";

  for (let i = 1; i <= sizeSquare; i++) {
    line += makeLine(sizeSquare) + "\n";
  }
  return line;
}



//**************** */

let widthRectangle = Number(input.question("How wide would you like your rectangle? "));
let heightRectangle = Number(input.question("How high would you like your rectangle? "));
let fullRectangle = (widthRectangle, heightRectangle);

function makeRectangle(widthRectangle, heightRectangle) {
let rect = "";

  for (let i = 1; i <= heightRectangle; i++) {
    rect += makeLine(widthRectangle) + "\n";
  }
  return rect;
 }


//**************** */

let stairs = Number(input.question("How many stairs would you like? "));

function makeDownwardStairs(stairs) {
let qtyStairs = "";

  for (let i = 0; i <= stairs; i++) {
    qtyStairs += makeLine(i) + "\n";
  }
  return qtyStairs;
}


//**************** */

let numberOfSpaces = Number(input.question("How many spaces would you like before and after the hashes? "));
let numberOfHashes = Number(input.question("How many hashes would you like? "));
spaces = " ";

function makeSpaceLine(numberOfSpaces, numberOfHashes) {

let spaceLine = " ";
let hashes = makeLine(numberOfHashes);

  for (let i = 0; i < numberOfSpaces; i++) {
    spaceLine = spaceLine + spaces;
  }
  console.log(`${spaceLine}${hashes}${spaceLine}`);
}





console.log(makeLine(lineSize));
console.log(makeSquare(sizeSquare));
console.log(makeRectangle(widthRectangle, heightRectangle));
console.log(makeDownwardStairs(stairs));
makeSpaceLine(numberOfSpaces, numberOfHashes);
