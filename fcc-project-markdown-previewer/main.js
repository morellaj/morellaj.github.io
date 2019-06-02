class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({text: e.target.value});
  }
  render() {
    return (<div>
      <section id='editor-section'>
        <Heading class="heading" title="Editor"/>
        <Editor class="section-text" text={this.state.text} onChange={this.handleChange}/>
      </section>
      <section id='preview-section'>
        <Heading class="heading" title="Preview"/>
        <Preview class='section-text' text={this.state.text}/>
      </section>
    </div>)
  }
};

const Heading = (props) => {
  return (<div className="heading">
    {props.title}
  </div>)
}

const Editor = (props) => {
  return (<textarea onChange={props.onChange} id="editor" value={props.text}/>)
}

const Preview = (props) => {
  return (<div id="preview" dangerouslySetInnerHTML={{
      __html: marked(props.text, {sanitize: true})
    }}></div>)
}

const defaultText = `Have you always dreamed of writing your own Legend of Zelda fan fiction, but were terror-stricken by the possibility that your work of art might have boring, unstyled font?  Well...

##### FEAR NO MORE

Simply enter your story in this editor and add non-intuitive styling characters, and your story will be transformed into a prose with epicness unmatched.

Rather than tell you how to do this, I'll demonstrate it with a story of my own.



# The Legend of Zelda: Ocarina Waker
Link was hanging out on his island when his grandpa was
> KIDNAPPED BY AN ALIEN
![Image of Alien](assets/alien.jpg)
Don't worry, Link knew exactly what to do.  He jumped on his trusty steed Epona and rode to his grandma's house.
![Image of Epona](assets/epona.jpg)
Link's grandma said he must go on a long quest to gather the sacred crystals so that he could defeat the Aliens.  She wrote him a to-do list so that he would remember
- Obtain sword
- Gather the emblems
  - red emblem
  - green emblem
  - blue emblem
  - but to gather an emblem, he must first gather the essences of each emblems
    - fire essence
    - water essence
    - ground essence
    - each essence had been broken into three pieces
      - upper piece
      - middle piece
      - lower piece
      - each piece had three wise men guarding it, so he need to gain their blessing
        - tall wise man
        - short wise man
        - average-ish height wise man
        - but each wise man only listened to his three daughters, so Link would need to find them first
          - oldest daughter
          - youngest daughter
          - other daughter
          - but these daughters only knew beauty, so they could only be convinced through the beauty of the emblems
            - red emblem
            - green emblem
            - blue emblem
            - ...

After completing the quest, Link approached the castle of the alien.  He was faced with a computer terminal, where he saw this message.
\`<div>You may enter, but only after solving a javascript problem.  Create a function that outputs the sum of two inputs.</div>\`

Fortunately Link had been studying up at FreeCodeCamp.com and entered this solution.

\`\`\`
sum(x, y){
  return x + y;
}
\`\`\`

This gained him entry into the castle where he fought the alien.

![Image of Epona](assets/punch-alien.jpg)

Link defeated the alien and saved the day.  __Yay!__

`;

ReactDOM.render(<Project/>, document.getElementById('project'));
