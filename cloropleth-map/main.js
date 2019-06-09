var xhReq = new XMLHttpRequest();
xhReq.open( 'GET', 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json', false );
xhReq.send( null );
var EDUCATION = JSON.parse( xhReq.responseText );

var xhReq = new XMLHttpRequest();
xhReq.open( 'GET', 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json', false );
xhReq.send( null );
var COUNTY = JSON.parse( xhReq.responseText );

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
  '#A60026'
];

var n = colors.length;

var minEd = d3.min( EDUCATION, ( d ) => d.bachelorsOrHigher );
var maxEd = d3.max( EDUCATION, ( d ) => d.bachelorsOrHigher );

EDUCATION.forEach( ( item ) => {
  item.ed = item.bachelorsOrHigher;
  item.heat = 10 * ( item.ed - minEd ) / ( maxEd - minEd );

  var i = 0;
  while ( i < item.heat && i < 20 ) {
    i++
  }
  item.color = colors[i - 1];
} );

function findEd( item ) {
  var obj = EDUCATION.find( obj => obj.fips === item[ 'id' ] );
  if ( obj ) {
    return obj;
  }
}

const w = 1500;
const h = 600;
const pad = 100;
const box = 50;

var tool = d3
  .select( '#tool' )
  .append( 'div' )
  .attr( 'id', 'tooltip' )
  .style( 'opacity', 0 );

const svg = d3
  .select( 'body' )
  .append( 'svg' )
  .attr( 'width', w )
  .attr( 'height', h )
  .selectAll( 'path' )
  .data( topojson.feature( COUNTY, COUNTY.objects.counties ).features )
  .enter()
  .append( 'path' )
  .attr( 'class', 'county' )
  .attr( "data-fips", ( d, i ) => d.id )
  .attr( "data-education", ( d, i ) => findEd( d ).ed )
  .attr( 'fill', ( d, i ) => findEd( d ).color )
  .attr( 'd', d3.geoPath() )
  .on( "mouseover", function ( d ) {
    tool.style( "opacity", 1 );
    tool
      .html( function () {
        var obj = findEd( d );
        return obj[ 'area_name' ] + ', ' + ': ' + obj.ed + '%';
      } )
      .attr( "data-education", () => findEd( d ).ed )

  } )
  .on( "mouseout", d => tool.style( "opacity", 0 ) )

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
  .append( "rect" );

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
    return '<' + Math.round( i * ( maxEd - minEd ) ) / 10;
  } );
