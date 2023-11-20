import React from 'react';
import ReactDOM from 'react-dom/client';
// import TestfunComponent from './TestfunComponent';
// import TestclassComponent from './TestclassComponent';

// import ClassComponent from './ClassComponent';
// import TwoWayBindingComponent from './TwoWayBindingComponent';
import ParentComponent from './ParentComponent';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('test'));
root.render(
  <div>
    <ParentComponent/>
  </div>
);