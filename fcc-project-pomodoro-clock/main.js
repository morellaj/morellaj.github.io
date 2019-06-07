const buttonList = {
  break: {
    default: 5,
    text: 'Break Length'
  },
  session: {
    default: 25,
    text: 'Session Length'
  }
}

const SOUNDINTERVAL = 1000;
const SOUNDCOUNT = 10;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingSession: 25,
      settingBreak: 5,
      currentSeconds: 0,
      currentMinutes: 25,
      playing: false,
      working: true,
      sound: false
    }
    this.updateSession = this.updateSession.bind(this);
    this.updateBreak = this.updateBreak.bind(this);
    this.updateClock = this.updateClock.bind(this);
    this.playClick = this.playClick.bind(this);
    this.pauseClick = this.pauseClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    this.naviClick = this.naviClick.bind(this);
    this.updateWorking = this.updateWorking.bind(this);
    this.updateSound = this.updateSound.bind(this);
  }

  updateSession(settingSession) {
    this.setState({settingSession});
  }

  updateBreak(settingBreak) {
    this.setState({settingBreak})
  }

  updateClock(currentSeconds, currentMinutes) {
    this.setState({currentSeconds, currentMinutes})
  }

  updateSession(settingSession) {
    this.setState({settingSession})
  }

  playClick() {
    this.setState({playing: true});
  }

  pauseClick() {
    this.setState({playing: false});
  }

  resetClick() {
    this.setState({currentSeconds: 0, currentMinutes: this.state.settingSession, playing: false});
  }

  naviClick() {
    this.setState({sound: false});
  }

  updateWorking(working, sound) {
    this.setState({working, sound})
  }

  updateSound(sound) {
    this.setState({sound});
  }

  render() {

    if (this.state.sound) {
      console.log('navi');
      $('#navi').fadeIn();
    } else {
      $('#navi').fadeOut();
    }

    return (<div id="container">
      <div id='header'>
        <img id='link' src='assets/link.png'/>
        <img id='zelda-logo' src='assets/zelda-logo.png'/>
        <img id='wizard' src='assets/wizard.png'/>
      </div>
      <div id="title">
        POMODORO CLOCK
      </div>
      <div id="settings">
        <Setting updateState={this.updateBreak} name='break' value={this.state.settingBreak}/>
        <Setting updateState={this.updateSession} name='session' value={this.state.settingSession}/>
      </div>
      <img src='assets/triforce.png' id='triforce'/>
      <img src='assets/navi.png' id='navi' onClick={this.naviClick}/>
      <Clock updateClock={this.updateClock} updateWorking={this.updateWorking} status={this.state} name="clock"/>
      <div id="buttons">
        <span class='clock-button' id="play" onClick={this.playClick}>PLAY</span>
        <span class='clock-button' id='pause' onClick={this.pauseClick}>PAUSE</span>
        <span class='clock-button' id="reset" onClick={this.resetClick}>RESET</span>
      </div>
      <Sound sound={this.state.sound} updateSound={this.updateSound}/>
    </div>)
  }
}
class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var button = e.target.getAttribute('value');
    var value = this.props.value;
    if (button === 'increment' && value < 60) {
      this.props.updateState(value + 1);
    } else if (button === 'decrement' && value > 1) {
      this.props.updateState(value - 1);
    }
  }

  render() {
    return (<div class='setting'>
      <div class="setting-title">
        {buttonList[this.props.name].text}</div>
      <div class='setting-display'>
        <img src='assets/arrow-left.png' class="setting-decrement" onClick={this.handleClick} value='decrement'/>
        <div class="setting-number">{this.props.value}</div>
        <img src='assets/arrow-right.png' class="setting-increment" onClick={this.handleClick} value='increment'/>
      </div>
    </div>)
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.props.status.playing) {
      var seconds = this.props.status.currentSeconds;
      var minutes = this.props.status.currentMinutes;

      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        var bool = !this.props.status.working;
        this.props.updateWorking(bool, true);
        seconds = 0;
        minutes = bool
          ? this.props.status.settingSession
          : this.props.status.settingBreak;
      }
      this.props.updateClock(seconds, minutes);
    }
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {
    var seconds = this.props.status.currentSeconds;
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    var minutes = this.props.status.currentMinutes;
    return (<div id="clock-container">
      <span id="clock-title">Session</span>
      <span id="clock-display">{minutes}:{seconds}</span>
    </div>)
  }
}

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      activated: false,
      count: 0
    }
    this.hello = new Audio('assets/navi-sounds/hello.wav');
    this.hey = new Audio('assets/navi-sounds/hey.wav');
    this. in = new Audio('assets/navi-sounds/in.wav');
    this.listen = new Audio('assets/navi-sounds/listen.wav');
    this.look = new Audio('assets/navi-sounds/look.wav');
    this.out = new Audio('assets/navi-sounds/out.wav');
    this.startSound = this.startSound.bind(this);
    this.randSound = this.randSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
  }

  startSound() {
    console.log('start');
    this. in.play();
    setTimeout(() => {
      this.setState({playing: true});
    }, SOUNDINTERVAL * .9)
  };

  randSound() {
    if (this.state.playing) {
      this.setState({
        count: this.state.count + 1
      })
      if (this.state.count > SOUNDCOUNT) {
        this.stopSound();
      } else {
        var num = Math.floor(Math.random() * 4);
        switch (num) {
          case 0:
            this.hello.play();
            break;
          case 1:
            this.hey.play();
            break;
          case 2:
            this.listen.play();
            break;
          case 3:
            this.look.play();
            break;
        }
      }
    }
  }

  stopSound() {
    console.log('stop');
    this.setState({playing: false, count: 0});
    this.out.play();
    this.props.updateSound(false);

    setTimeout(() => {
      this.setState({activated: false})
    }, SOUNDINTERVAL * .9)
  };

  componentDidMount() {
    setInterval(this.randSound, SOUNDINTERVAL);
  }

  render() {
    if (this.props.sound && !this.state.activated) {
      this.setState({activated: true})
      this.startSound();
    } else if (!this.props.sound && this.state.playing && this.state.activated) {
      this.setState({activated: false})
      this.stopSound();
    }

    return (<div/>)
  }
}

ReactDOM.render(< App / >, document.getElementById('project'));
