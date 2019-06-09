var xhReq = new XMLHttpRequest();
xhReq.open( 'GET', 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-f' +
			'unding-data.json', false );
xhReq.send( null );
var KICKSTARTER = JSON.parse( xhReq.responseText );

var xhReq = new XMLHttpRequest();
xhReq.open( 'GET', 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.js' +
			'on', false );
xhReq.send( null );
var MOVIE = JSON.parse( xhReq.responseText );

var xhReq = new XMLHttpRequest();
xhReq.open( 'GET', 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sa' +
			'les-data.json', false );
xhReq.send( null );
var VIDEOGAME = JSON.parse( xhReq.responseText );

var colors = [
	'#313694',
	'#4575B5',
	'#75ADD2',
	'#ABD9E9',
	'#E0F3F7',
	'#FFFFBF',
	'#FFAD64',
	'#F07043',
	'#D73027',
	'#A60026',
];

var n = colors.length;

const w = 1000;
const h = 600;
const pad = 3;
const padOut = 10;
const box = 50;

function draw( dataset ) {
	var data = dataset
	var count = 0;
	var sumAll = 0;

	for ( var i = 0, k = dataset.children.length; i < k; i++ ) {
		var sum = 0;
		for ( var j = 0, m = dataset.children[ i ].children.length; j < m; j++ ) {
			dataset
				.children[ i ]
				.children[ j ]
				.color = colors[ count ];
			sum += parseFloat( dataset.children[ i ].children[ j ].value );
		}
		dataset
			.children[ i ]
			.total = sum;
		count++;
		sumAll += sum;
		if ( count > n - 1 ) {
			count = 0;
		}
	}

	dataset.total = sumAll;

	var tool = d3
		.select( '#tool' )
		.append( 'div' )
		.attr( 'id', 'tooltip' )
		.style( 'opacity', 0 );

	const svg = d3
		.select( "body" )
		.append( "svg" )
		.attr( "width", w )
		.attr( "height", h );

	const treeMap = d3
		.treemap()
		.size( [ w, h, ] )
		.paddingInner( pad );

	const root = d3
		.hierarchy( data )
		.sum( ( d ) => d.value )
		.sort( ( a, b ) => b.height - a.height || b.value - a.value );

	treeMap( root );

	var game = svg
		.selectAll( "g" )
		.data( root.leaves() )
		.enter()
		.append( "g" )
		.attr( "transform", ( d ) => "translate( " + d.x0 + ", " + d.y0 + " )" );

	var tile = game
		.append( "rect" )
		.attr( 'class', 'tile' )
		.attr( 'data-name', ( d ) => d.data.name )
		.attr( 'data-category', ( d ) => d.data.category )
		.attr( 'data-value', ( d ) => d.data.value )
		.attr( "width", ( d ) => d.x1 - d.x0 )
		.attr( "height", ( d ) => d.y1 - d.y0 )
		.attr( "fill", ( d ) => d.data.color )
		.on( "mousemove", ( d ) => {
			tool.html( 'Name: ' + d.data.name + '<br>Category: ' + d.data.category + '<br>Value: ' + d.data.value );
			tool.attr( 'data-value', d.data.value );
			tool.style( "opacity", 1 );
		} )
		.on( "mouseout", () => {
			tool.style( "opacity", 0 );
		} )

	var tileText = game
		.append( "text" )
		.selectAll( "tspan" )
		.data( ( d ) => d.data.name.split( /(?=[A-Z][^A-Z])/g ) )
		.enter()
		.append( "tspan" )
		.attr( "x", 5 )
		.attr( "y", ( d, i ) => ( i + 1 ) * 15 )
		.text( ( d ) => d );

	const legend = d3
		.select( 'body' )
		.append( 'svg' )
		.attr( 'width', box * n )
		.attr( 'height', 200 )
		.attr( 'id', 'legend' );

	const legends = legend
		.selectAll( "rect" )
		.data( colors )
		.enter()
		.append( "rect" )
		.attr( 'class', 'legend-item' );

	legends
		.attr( 'x', ( d, i ) => i * box )
		.attr( 'y', ( d, i ) => 0 )
		.attr( 'width', ( d, i ) => box )
		.attr( 'height', ( d, i ) => box );

	legends.attr( 'fill', ( d, i ) => d );

	const text = legend
		.selectAll( 'text' )
		.data( colors )
		.enter()
		.append( 'text' )
		.attr( 'class', 'legend-text' );

	text
		.attr( 'x', ( d, i ) => i * box + box / 4 )
		.attr( 'y', ( d, i ) => 1.5 * box )
		.text( ( d, i ) => {
			return 'a';
		} );

}

draw( VIDEOGAME );
