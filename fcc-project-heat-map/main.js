$.getJSON('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json', function(json) {
  const dataset = json.monthlyVariance;

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

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

  var minTemp = d3.min(dataset, (d) => d.variance) + json.baseTemperature;
  var maxTemp = d3.max(dataset, (d) => d.variance) + json.baseTemperature;
  var minYear = d3.min(dataset, (d) => d.year);
  var maxYear = d3.max(dataset, (d) => d.year);

  dataset.forEach((item) => {
    item.temp = json.baseTemperature + item.variance;
    item.mth = months[item.month];
    item.heat = 10 * (item.temp - minTemp) / (maxTemp - minTemp);

    var i = 0;
    while (i < item.heat && i < 20) {
      i++
    }
    item.color = colors[i - 1];
  });

  const w = 1500;
  const h = 600;
  const box = 50;
  const pad = 100;
  const width = (w - 2 * pad) / (maxYear - minYear);
  const height = (h - 2 * pad) / 12;

  var tool = d3.select('#tool').append('div').attr('id', 'tooltip').style('opacity', 0);

  const xScale = d3.scaleLinear().domain([minYear, maxYear]).range([
    pad, w - pad
  ]);

  const yScale = d3.scaleLinear().domain([1, 13]).range([
    pad, h - pad
  ]);

  const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

  const rects = svg.selectAll("rect").data(dataset).enter().append("rect");

  rects.attr("x", (d, i) => xScale(d['year'])).attr("y", (d, i) => yScale(d['month']));

  rects.attr("width", width).attr('height', height).attr("fill", (d, i) => d['color']).attr("class", "cell");

  rects.attr('data-month', (d, i) => d['month'] - 1).attr('data-year', (d, i) => d['year']).attr('data-temp', (d, i) => d['temp']);

  rects.on('mouseover', (d, i) => {
    tool.style('opacity', 1).attr('data-year', d['year']).attr('data-temp', d['temp']).html(d['time'])
  });

  rects.on('mouseout', (d, i) => {
    tool.style('opacity', 0);
  })

  const legend = d3.select('body').append('svg').attr('width', box * n).attr('height', 200).attr('id', 'legend');

  const legends = legend.selectAll("rect").data(colors).enter().append("rect");

  legends.attr('x', (d, i) => i * box).attr('y', (d, i) => 0).attr('width', (d, i) => box).attr('height', (d, i) => box);

  legends.attr('fill', (d, i) => d);

  const text = legend.selectAll('text').data(colors).enter().append('text').attr('class', 'legend-text');

  text.attr('x', (d, i) => i * box + box / 4).attr('y', (d, i) => 1.5 * box).text((d, i) => {
    return '<' + Math.round(i * (maxTemp - minTemp)) / 10;
  });

  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));

  const yAxis = d3.axisLeft(yScale).tickValues([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ]).tickFormat((d, i) => months[d - 1]);

  svg.append('g').attr('transform', 'translate(0,' + (
  h - pad) + ')').attr('id', 'x-axis').call(xAxis);

  svg.append('g').attr('transform', 'translate(' + pad + ', 0)').attr('id', 'y-axis').call(yAxis);

});
