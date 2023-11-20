// ParentComponent.js
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleMessageFromChild = (message) => {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        <ChildComponent 
          messageFromParent="Hello from Parent!" 
          sendMessageToParent={this.handleMessageFromChild} 
        />
        <p>Message from child: {this.state.message}</p>
      </div>
    );
  }
}

export default ParentComponent;
