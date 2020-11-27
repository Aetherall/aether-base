import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>counter : {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
