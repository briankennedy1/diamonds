import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from './components/LoginButton.js';

class Wrapper extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui padded segment">
          <LoginButton text="Login" url="" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
