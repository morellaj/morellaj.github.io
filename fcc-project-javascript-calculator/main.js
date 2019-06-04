const genFunction = function(equation, text, result) {
  var n = equation.length;
  var str = equation;
  var typeNum = (this.type === 'number');
  var sym = this.symbol;

  if (equation.indexOf('=') !== -1) {
    return typeNum
      ? [sym, sym, sym]
      : [
        result + sym,
        result + sym,
        result + sym
      ];
  } else if (!isNaN(parseInt(str[n - 1]))) {
    return typeNum
      ? [equation.concat(sym), text.concat(sym), result.concat(sym)]
      : [equation.concat(sym), sym, result.concat(sym)]
  } else if (str[n - 1] === '.') {
    return typeNum
      ? [equation.concat(sym), text.concat(sym), result.concat(sym)]
      : [
        str.substr(0, n - 1) + sym,
        text.substr(0, n - 1) + sym,
        str.substr(0, n - 1) + sym
      ];
  } else if (n === 1) {
    return typeNum
      ? [sym, sym, sym]
      : [equation, text, result]

  } else {
    return typeNum
      ? [equation.concat(sym), this.symbol, result.concat(sym)]
      : [
        str.substr(0, n - 2) + sym,
        sym,
        str.substr(0, n - 2) + sym
      ];
  }
}

const dotFunction = function(equation, text, result) {
  var n = equation.length;
  var str = equation;
  var typeNum = (this.type === 'number');
  var sym = this.symbol;

  if (equation.indexOf('.') !== -1) {
    return [equation, text, result];
  } else if (equation.indexOf('=') !== -1) {
    return [
      result + sym,
      result + sym,
      result + sym
    ];
  } else if (!isNaN(parseInt(str[n - 1]))) {
    return [equation.concat(sym), text.concat(sym), result.concat(sym)];
  } else if (n <= 1) {
    return ['0.', '0.', '0.'];
  } else {
    return [equation, text, result];
  }
}

const ceFunction = function(equation, text, result) {
  var n = text.length;

  return n === 0
    ? [equation, text, result]
    : [
      equation.substr(0, equation.length - n),
      '',
      result.substr(0, result.length - n)
    ];
}

const equalFunction = function(equation, text, result) {
  var n = equation.length;
  if (equation.indexOf('=') !== -1) {
    switch (this.symbol) {
      case '=':
        var output = eval(text).toString();
        return [
          output.concat(' = ' + output),
          output,
          output
        ];
      case '%':
        var output = (eval(text) / 100).toString();
        return [
          '(' + text + ')/100 = ' + output,
          output,
          output
        ];
      case '√':
        var output = (Math.sqrt(eval(text))).toString();
        return [
          '√(' + text + ') = ' + output,
          output,
          output
        ];
      case 'x²':
        var output = (Math.pow(eval(text), 2)).toString();
        return [
          '(' + text + ')² = ' + output,
          output,
          output
        ];
      case '1/x':
        var output = (1 / eval(text)).toString();
        return [
          '1/(' + text + ') = ' + output,
          output,
          output
        ];
    }
  } else if (!isNaN(parseInt(equation[n - 1]))) {
    switch (this.symbol) {
      case '=':
        var output = eval(equation).toString();
        return [
          equation + ' = ' + output,
          output,
          output
        ];
      case '%':
        var output = (eval(equation) / 100).toString();
        return [
          '(' + equation + ')/100 = ' + output,
          output,
          output
        ];
      case '√':
        var output = (Math.sqrt(eval(equation))).toString();
        return [
          '√(' + equation + ') = ' + output,
          output,
          output
        ];
      case 'x²':
        var output = (Math.pow(eval(equation), 2)).toString();
        return [
          '(' + equation + ')² = ' + output,
          output,
          output
        ];
      case '1/x':
        var output = (1 / eval(equation)).toString();
        return [
          '1/(' + equation + ') = ' + output,
          output,
          output
        ];
    }
  } else {
    equation[n - 1] === '.'
      ? equation = equation.substr(0, n - 1)
      : equation = equation.substr(0, n - 3);
    equation = equation.substr(0, n - 1);
    switch (this.symbol) {
      case '=':
        var output = eval(equation).toString();
        return [
          equation + ' = ' + output,
          output,
          output
        ];
      case '%':
        var output = (eval(equation) / 100).toString();
        return [
          '(' + equation + ')/100 = ' + output,
          output,
          output
        ];
      case '√':
        var output = (Math.sqrt(eval(equation))).toString();
        return [
          '√(' + equation + ') = ' + output,
          output,
          output
        ];
      case 'x²':
        var output = (Math.pow(eval(equation), 2)).toString();
        return [
          '(' + equation + ')² = ' + output,
          output,
          output
        ];
      case '1/x':
        var output = (1 / eval(equation)).toString();
        return [
          '1/(' + equation + ') = ' + output,
          output,
          output
        ];
    }
  }
}

const inverseFunction = function(equation, text, result) {
  var sign = (result[0] === '-');

  if (equation.indexOf('=') !== -1) {
    return sign
      ? [result.substr(1), result.substr(1), result.substr(1)]
      : [
        '-' + result,
        '-' + result,
        '-' + result
      ];
  } else {
    return sign
      ? [equation.substr(1), text.substr(1), result.substr(1)]
      : [
        '-' + equation,
        '-' + text,
        '-' + result
      ]
  }
}

const buttonList = {
  '%': {
    symbol: '%',
    buttonFunction: equalFunction,
    type: 'other',
    order: 1
  },
  'root': {
    symbol: '√',
    buttonFunction: equalFunction,
    type: 'other',
    order: 2
  },
  'x^2': {
    symbol: 'x²',
    buttonFunction: equalFunction,
    type: 'other',
    order: 3
  },
  '1/x': {
    symbol: '1/x',
    buttonFunction: equalFunction,
    type: 'other',
    order: 4
  },
  'CE': {
    symbol: 'CE',
    buttonFunction: ceFunction,
    type: 'other',
    order: 5
  },

  'C': {
    symbol: 'C',
    buttonFunction: function(equation, text, result) {
      return ['', '', '']
    },
    type: 'other',
    order: 6
  },
  'back': {
    symbol: '<-',
    buttonFunction: function(equation, text, value) {
      if (equation.indexOf('=') === -1) {
        return text === ''
          ? [equation, text, value]
          : [
            equation.substr(0, equation.length - 1),
            text.substr(0, text.length - 1),
            value.substr(0, value.length - 1)
          ];
      } else {
        return [equation, text, value];
      }
    },
    type: 'other',
    order: 7
  },
  '/': {
    symbol: ' / ',
    buttonFunction: genFunction,
    type: 'operator',
    order: 8
  },
  '7': {
    symbol: '7',
    buttonFunction: genFunction,
    type: 'number',
    order: 9
  },
  '8': {
    symbol: '8',
    buttonFunction: genFunction,
    type: 'number',
    order: 10
  },
  '9': {
    symbol: '9',
    buttonFunction: genFunction,
    type: 'number',
    order: 11
  },
  '*': {
    symbol: ' * ',
    buttonFunction: genFunction,
    type: 'operator',
    order: 12
  },
  '4': {
    symbol: '4',
    buttonFunction: genFunction,
    type: 'number',
    order: 13
  },
  '5': {
    symbol: '5',
    buttonFunction: genFunction,
    type: 'number',
    order: 14
  },
  '6': {
    symbol: '6',
    buttonFunction: genFunction,
    type: 'number',
    order: 15
  },
  '-': {
    symbol: ' - ',
    buttonFunction: genFunction,
    type: 'operator',
    order: 16
  },
  '1': {
    symbol: '1',
    buttonFunction: genFunction,
    type: 'number',
    order: 17
  },
  '2': {
    symbol: '2',
    buttonFunction: genFunction,
    type: 'number',
    order: 18
  },
  '3': {
    symbol: '3',
    buttonFunction: genFunction,
    type: 'number',
    order: 19
  },
  '+': {
    symbol: ' + ',
    buttonFunction: genFunction,
    type: 'operator',
    order: 20
  },
  '+-': {
    symbol: '±',
    buttonFunction: inverseFunction,
    type: 'other',
    order: 21
  },
  '0': {
    symbol: '0',
    buttonFunction: genFunction,
    type: 'number',
    order: 22
  },
  '.': {
    symbol: '.',
    buttonFunction: dotFunction,
    type: 'other',
    order: 23
  },
  '=': {
    symbol: '=',
    buttonFunction: equalFunction,
    type: 'operator',
    order: 24
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //this.activateButton = this.activateButton.bind(this);
  }
  handleClick(e) {
    var equation = this.props.currentState.equation;
    var text = this.props.currentState.text;
    var result = this.props.currentState.result;
    var button = e.target.getAttribute('value');

    var arr = buttonList[button].buttonFunction(equation, text, result);

    this.props.updateState(arr[0], arr[1], arr[2]);
  }
  render() {
    var arr = []
    for (var item in buttonList) {
      arr.push(<span class="button" style={{
          order: buttonList[item].order
        }} onClick={this.handleClick} value={item}>{buttonList[item].symbol}</span>)
    }
    return (<div id="button-container">
      {arr}
    </div>)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: ' ',
      text: ' ',
      result: ' '
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(equation, text, result) {
    this.setState({equation, text, result});
  }
  render() {

    return (<div id="calculator">
      <div id='equationDisplay'>{this.state.equation}</div>
      <div id='textDisplay'>{this.state.text}</div>
      <Buttons currentState={this.state} updateState={this.handleChange}/>

    </div>)
  }
}
ReactDOM.render(<App/>, document.getElementById('project'));
