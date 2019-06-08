const soundList = {

  81: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      id: 'Heater-1'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
      id: 'Shaker'
    },
    key: 'Q',
    order: 1
  },
  87: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      id: 'Heater-2'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
      id: 'Open-HH'
    },
    key: 'W',
    order: 2
  },
  69: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      id: 'Heater-3'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
      id: 'Closed-HH'
    },
    key: 'E',
    order: 3
  },
  82: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      id: 'Heater-4'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      id: 'Punchy-Kick'
    },
    key: 'R',
    order: 4
  },
  65: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      id: 'Heater-6'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
      id: 'Side-Stick'
    },
    key: 'A',
    order: 5
  },
  83: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      id: 'Open-HH'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      id: 'Snare'
    },
    key: 'S',
    order: 6
  },
  68: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      id: 'Kick-n-Hat'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      id: 'Kick-n-Hat'
    },
    key: 'D',
    order: 7
  },
  70: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      id: 'Kick'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      id: 'Kick'
    },
    key: 'F',
    order: 8
  },
  90: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      id: 'Closed-HH'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      id: 'Closed-HH'
    },
    key: 'Z',
    order: 9
  },
  88: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
      id: 'Chord-1'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
      id: 'Chord-1'
    },
    key: 'X',
    order: 10
  },
  67: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
      id: 'Chord-2'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
      id: 'Chord-2'
    },
    key: 'C',
    order: 11
  },
  86: {
    one: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
      id: 'Chord-3'
    },
    two: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
      id: 'Chord-3'
    },
    key: 'V',
    order: 12
  }
}

var keys = Object.keys(soundList);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      bank: 'one',
      display: ''
    }
    this.powerClick = this.powerClick.bind(this);
    this.bankClick = this.bankClick.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  powerClick() {
    this.setState({
      power: !this.state.power
    });
    console.log(this.state.power);
  }

  bankClick(e) {
    var newBank = e.target.getAttribute('value')
    this.setState({bank: newBank});
  }

  updateDisplay(display) {
    this.setState({display});
  }

  render() {
    var bankOneColor;
    var bankTwoColor;

    if (this.state.bank === 'one') {
      bankOneColor = 'blue';
      bankTwoColor = 'gray';
    } else {
      bankOneColor = 'gray';
      bankTwoColor = 'blue';
    }

    var powerColor = this.state.power
      ? 'red'
      : 'gray';

    return (<div id='drumset'>
      <div id='settings-container'>
        <div id='power' onClick={this.powerClick} style={{
            backgroundColor: powerColor
          }}>Power</div>
        <div id='banks'>
          <div id='bank-one' class='bank-button' value='one' onClick={this.bankClick} style={{
              backgroundColor: bankOneColor
            }}>Bank One</div>
          <div id='bank-two' class='bank-button' value='two' onClick={this.bankClick} style={{
              backgroundColor: bankTwoColor
            }}>Bank Two</div>
        </div>
        <div id='display'>{this.state.display}</div>
      </div>
      <Pads bank={this.state.bank} update={this.updateDisplay} power={this.state.power}/>
    </div>)
  }
}

class Pads extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.hitPad = this.hitPad.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleClick(e) {
    this.hitPad(e.target.getAttribute('value'));
  }

  handleKey(e) {
    this.hitPad(e.keyCode);
  }

  hitPad(e) {
    if ($.inArray(e.toString(), keys) !== -1 && this.props.power) {
      const drum = document.getElementById(e);
      drum.currentTime = 0;
      drum.play();
      this.props.update(soundList[e][this.props.bank].id);
    }

  }

  render() {
    var arr = [];
    for (var item in soundList) {
      arr.push(<div class='pad' style={{
          order: soundList[item].order
        }} onClick={this.handleClick} value={item}>
        <audio id={item} src={soundList[item][this.props.bank].url}/> {soundList[item].key}
      </div>)
    };

    return (<div id='pad-container'>
      {arr}
    </div>)
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
