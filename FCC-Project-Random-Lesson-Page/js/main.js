// List of lessons and attributes of each lesson
var lessonList = {
	air: {
		image: 'air.jpg',
		color: 'lightblue',
		title: 'Nature of Air',
		text: 'Is air a real thing, or is it just nothing?  Learn all about the invisible substance that surrounds us.'
	}

	,
	animal: {
		image: 'animal.jpeg',
		color: 'red',
		title: 'Dangerous Animals',
		text: 'Why are some animals scary, while others are harmless?  Learn about the teeth and claws of different animals.'
	}

	,
	'day-and-night': {
		image: 'day-and-night.jpg',
		color: 'purple',
		title: 'Day and Night Cycle',
		text: 'Why does the sun move across the sky?  Why isn\'t it always day or always night?  Learn about rotation of the Earth.'
	}

	,
	gravity: {
		image: 'gravity.png',
		color: 'black',
		title: 'Gravity',
		text: 'What causes things to fall?  And why can some things like birds and helium balloons fly?  Learn about the force that pulls us down.'
	}

	,
	'herbivores-and-carnivores': {
		image: 'herbivores-and-carnivores.jpg',
		color: 'green',
		title: 'Herbivores and Carnivores',
		text: 'Do all animals get energy from the same source?  Learn about the different diets of animals.'
	}

	,
	landforms: {
		image: 'landforms.jpg',
		color: 'darkgreen',
		title: 'Landforms',
		text: 'How was Mount Everest formed?  Will it last forever?  Learn about the changing surface of the Earth.'
	}

	,
	rocks: {
		image: 'rocks.jpg',
		color: 'blue',
		title: 'Rocks',
		text: 'Rocks are everywhere!  Where did they come from?  Learn all about the rocks below our feet.'
	}

	,
	soil: {
		image: 'soil.jpg',
		color: 'brown',
		title: 'Soil',
		text: 'Where did soil come from?  Is soil good for anything?  Learn about one of the most important resources on Earth.'
	}

	,
	stars: {
		image: 'stars.jpg',
		color: 'darkblue',
		title: 'Stars',
		text: 'What are stars?  How far away are they?  Learn about the constellations in the night sky.'
	}

	,
	'states-of-matter': {
		image: 'states-of-matter.png',
		color: 'orange',
		title: 'States of Matter',
		text: 'Why is it so easy to spill a drink?  What am I feeling on a windy day?  Learn about the different states of matter.'
	}

};

// Variable to store current lesson
var randomLesson = '';

// Function to get a new lesson and update the page
function getLesson( obj ) {

	var keys = Object.keys( obj );
	var currentLesson = randomLesson

	// If the new lesson matches the old lesson, get a new random lesson
	while ( currentLesson === randomLesson ) {
		randomLesson = keys[ keys.length * Math.random() << 0 ];
	}

	// Animations to new lesson
	$( '#lesson-box ' ).animate( {
			opacity: 0
		}, 500,
		function() {
			$( '#lesson-box' ).animate( {
				opacity: 1,
			}, 500 );
			$( '#lesson-image' ).animate( {
				boxShadow: '2px 3px 2px 2px #888888'
			}, 500 );
			$( '#lesson-image' ).attr( 'src', 'assets/' + lessonList[ randomLesson ].image );
			$( '#lesson-title' ).text( lessonList[ randomLesson ].title );
			$( '#lesson-text' ).text( lessonList[ randomLesson ].text );
		}
	)

	// Animations for background color and buttons
	var color = lessonList[ randomLesson ].color;
	$( "body" ).animate( {
			backgroundColor: color,
		},
		1000
	);

	$( ".button" ).animate( {
		backgroundColor: color
	}, 1000 );
}

// Function for opening Twitter and Tumblr
function openURL( url ) {
	window.open( url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0' )
}

// Main function
$( document ).ready( function() {
	getLesson( lessonList );

	// Function to run when buttons are clicked
	$( '#new-lesson' ).on( 'click', function() {
		getLesson( lessonList );
	} );

	$( '#tweet-lesson' ).on( 'click', function() {
		openURL( 'https://twitter.com/intent/tweet?text=Check out this lesson on LearningistheSolution.com!  ' + lessonList[ randomLesson ].title + ': ' + lessonList[ randomLesson ].text );
	} );

	$( '#tumblr-lesson' ).on( 'click', function() {
		openURL( 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button' );
	} );
} );
