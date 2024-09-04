class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
}

ReactDOM.render(React.createElement(HelloMessage, 
    {name: "Westcliff University"}),
    document.getElementById('hello-example'));
