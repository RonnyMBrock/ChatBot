import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      msg: '',
      msgList: []

    };
  }

  _handleOnChange(val) {
    this.setState({
      msg: val.target.value
    });
  }

  _handleOnClick(){
    const { msg, msgList } = this.state;
    if (msg) {
      const nextState = [...msgList,'You: ' + msg, this._handleChatBot(msg)];
      this.setState({ msgList: nextState, msg: '' });
      this._handleChatBot();
    }
  }

  _handleChatBot(msg){
    return 'Badger Bot:' + msg;
  }


  render() {
    const { msg, msgList } = this.state;
    return React.createElement('div', {className: 'App'},
    React.createElement('div', {className: 'App-head'},
    React.createElement('header', {className: 'App-header'},
    React.createElement('img',{className: 'App-logo', src: logo}),
    React.createElement('h1',{className: 'App-title'}, 'Welcome to React Chatbot'),
    React.createElement('h2',{className: 'App-subtitle'}, 'Chat with Badger Bot!')
  )
),
React.createElement('div', {className: 'App-body'},
React.createElement('List', {src: msgList}),
React.createElement("ul", {className: 'App-list'},
msgList.map(function(listValue){
  return React.createElement("li", null, listValue);
}))),
React.createElement('div', {className: 'App-foot'},
React.createElement('input', {value: msg, placeholder: "Send Message...", onChange: data => {this._handleOnChange(data);}}),
React.createElement('button', {className: 'App-chat', onClick: () => { this._handleOnClick() }}, 'Send')
)
)
}
}

function send(newMsg){
  alert(newMsg);
}

const ListItem = ({ value, onClick }) => (
  <li onClick={onClick}>{value}</li>
);

const List = ({ items, onItemClick }) => (
  <ul>
    {
      items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
    }
  </ul>
);

export default App;
