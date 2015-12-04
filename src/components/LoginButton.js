import React from 'react';

export default class LoginButton extends React.Component {
  handleClick() {
    console.log('clickaroo');
  }

  render() {
    return (
      <button onClick={this.handleClick} className="ui primary button">
        {this.props.text}
      </button>
    );
  }

}
