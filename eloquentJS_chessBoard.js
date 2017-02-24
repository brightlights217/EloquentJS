console.log("My chessboard below:");

var variedChessboard = "";

var sizeOfChessboard = 8;

for ( var cols = 0; cols < sizeOfChessboard ; cols++ ) { //creates each row
	var line = "";
	//  DEBUG console.log("column " + cols);
	for ( var rows = 0 ; rows < sizeOfChessboard ; rows++ ) { //creates line
		//  DEBUG console.log("row " + rows);
		if ( (rows + cols) % 2 == 0 ) {
			line += " ";
		} else {
			line += "#";
		}
	};
	variedChessboard += line + "\n";
};

console.log(variedChessboard);