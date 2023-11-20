// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  const { messageFromParent, sendMessageToParent } = props;

  return (
    <div>
      <p>Message from parent: {messageFromParent}</p>
      <button onClick={() => sendMessageToParent("Hello from Child!")}>
        Send Message to Parent
      </button>
    </div>
  );
}

export default ChildComponent;
