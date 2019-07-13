import React from 'react';
import AddMessage from './AddMessage';
import ClearAll from './ClearAll';
import MessageList from './MessageList';

const App = () => (
  <div>
    <AddMessage />
    <MessageList />
    <ClearAll />
  </div>
);

export default App;
