/*
Eloquent Javascript - Exercise 2.3 - Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// BEGIN CODE

var Chessboard = "";

var sizeOfChessboard = 8; // change this integer to specify the chessboard size.  
                          // this integer will be the same length and width 

for ( var cols = 0; cols < sizeOfChessboard ; cols++ ) { // creates each row
	var line = "";  // initialize the line
	//  DEBUG console.log("column " + cols);
	for ( var rows = 0 ; rows < sizeOfChessboard ; rows++ ) { // creates line
		//  DEBUG console.log("row " + rows);
		if ( (rows + cols) % 2 == 0 ) {
			line += " ";
		} else {
			line += "#";
		}
	};
	Chessboard += line + "\n";
};

console.log(Chessboard);

// END CODE