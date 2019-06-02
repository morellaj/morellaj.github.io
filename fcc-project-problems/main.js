// This function checks whether a string is a palindrome
function palindrome( str ) {
	let string = str.replace( /[_\s,|.(\):/-]/g, '' );
	let len = string.length;

	for ( let i = 0, n = Math.floor( string.length / 2 ); i < n; i++ ) {
		let x = string[ i ].toLowerCase();
		let y = string[ len - 1 - i ].toLowerCase();

		if ( x != y ) {
			return false;
		}
	}

	return true;
}


//  This function converts a roman numeral to a number
function convertToRoman( num ) {
	let romanObj = {
		0: {
			number: 1000,
			letter: "M",
			count: 0
		},
		1: {
			number: 900,
			letter: "CM",
			count: 0
		},
		2: {
			number: 500,
			letter: "D",
			count: 0
		},
		3: {
			number: 400,
			letter: "CD",
			count: 0
		},
		4: {
			number: 100,
			letter: "C",
			count: 0
		},
		5: {
			number: 90,
			letter: "XC",
			count: 0
		},
		6: {
			number: 50,
			letter: "L",
			count: 0
		},
		7: {
			number: 40,
			letter: "XL",
			count: 0
		},
		8: {
			number: 10,
			letter: "X",
			count: 0
		},
		9: {
			number: 9,
			letter: "IX",
			count: 0
		},
		10: {
			number: 5,
			letter: "V",
			count: 0
		},
		11: {
			number: 4,
			letter: "IV",
			count: 0
		},
		12: {
			number: 1,
			letter: "I",
			count: 0
		},
	}
	let n = 13;
	let number = num;
	let romanNumber = "";
	for ( let i = 0; i < n; i++ ) {
		romanObj[ i ].count = Math.floor( number / romanObj[ i ].number )
		number -= romanObj[ i ].number * romanObj[ i ].count;
		for ( let j = 0; j < romanObj[ i ].count; j++ ) {
			romanNumber += romanObj[ i ].letter;
		}
	}
	return romanNumber;
}

// Deciphers a message encrypted with ceaser cipher
function rot13( str ) { // LBH QVQ VG!
	let message = "";
	let string = str.toUpperCase();
	for ( let i = 0, n = string.length; i < n; i++ ) {
		if ( !string[ i ].match( /^[A-Z]+$/ ) ) {
			message += string[ i ];
		} else {
			let x = string[ i ].charCodeAt( 0 ) - 13;
			if ( x < 65 ) {
				x += 26;
			}
			message += String.fromCharCode( x );

		}
	}
	return message;
}

// Given a price, cash given, and change in a cash register, returns the correct amount of change
function checkCashRegister( price, cash, cid ) {
	let value = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: .1,
		QUARTER: .25,
		ONE: 1,
		FIVE: 5,
		TEN: 10,
		TWENTY: 20,
		"ONE HUNDRED": 100
	};

	let changeDue = cash - price;
	let count = 0;
	let change = [];
	let len = cid.length;
	let cashLeft = [];
	for ( let i = 0; i < len; i++ ) {
		cashLeft.push( cid[ i ].slice() );
	}

	for ( let i = len - 1; i >= 0; i-- ) {
		count = Math.floor( changeDue / value[ cid[ i ][ 0 ] ] );
		if ( count * value[ cid[ i ][ 0 ] ] > cid[ i ][ 1 ] ) {
			count = cid[ i ][ 1 ] / value[ cid[ i ][ 0 ] ];
		}
		if ( count !== 0 ) {

			change.push( [ cid[ i ][ 0 ], count * value[ cid[ i ][ 0 ] ] ] );
			changeDue = Math.round( ( changeDue - count * value[ cid[ i ][ 0 ] ] ) * 100 ) / 100;
			cashLeft[ i ][ 1 ] = Math.round( ( cashLeft[ i ][ 1 ] - count * value[ cashLeft[ i ][ 0 ] ] ) * 100 ) / 100;
		}
	};

	let match = true;
	for ( let i = 0; i < len; i++ ) {
		if ( cashLeft[ i ][ 1 ] !== 0 ) {
			match = false;
		}
	}
	if ( changeDue !== 0 ) {
		return {
			status: "INSUFFICIENT_FUNDS",
			change: []
		};
	} else if ( match ) {
		return {
			status: "CLOSED",
			change: cid
		};
	} else {
		return {
			status: "OPEN",
			change: change
		};
	}
}

$( '#palindrome-button' ).on( 'click', function() {
	if ( palindrome( $( '#palindrome-text' ).val() ) ) {
		$( '#palindrome-result' ).html( 'YES' );
	} else {
		$( '#palindrome-result' ).html( 'NO' );
	}
} );

$( '#roman-button' ).on( 'click', function() {
	if ( $( '#roman-text' ).val() > 10000000 ) {
		$( '#roman-result' ).html( 'TOO BIG!' );
	} else {
		$( '#roman-result' ).html( convertToRoman( $( '#roman-text' ).val() ) );
	}
} );

$( '#cipher-button' ).on( 'click', function() {
	$( '#cipher-result' ).html( rot13( $( '#cipher-text' ).val() ) );
} );

$( '#cash-button' ).on( 'click', function() {
	var register = [
		[ "PENNY", 1.01 ],
		[ "NICKEL", 2.05 ],
		[ "DIME", 3.1 ],
		[ "QUARTER", 4.25 ],
		[ "ONE", 90 ],
		[ "FIVE", 55 ],
		[ "TEN", 20 ],
		[ "TWENTY", 60 ],
		[ "ONE HUNDRED", 100 ]
	];
	var message;
	var cost = parseInt( $( '#cost-text' ).val() );
	var paid = parseInt( $( '#paid-text' ).val() );
	var result = checkCashRegister( cost, paid, register );
	console.log( result );

	if ( cost > paid ) {
		message = 'PAY ME MORE!';
	} else if ( cost === paid ) {
		message = 'NO CHANGE DUE';
	} else if ( result.status === 'INSUFFICIENT_FUNDS' ) {
		message = 'INSUFFICIENT_FUNDS'
	} else {
		message = result.change.join( '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' );
	}
	$( '#cash-result' ).html( message );
} );
