import React from 'react'
import { render } from 'react-dom'
import SearchParams from './searchParams';

const App = () => {

  return (
    <React.StrictMode>
      <div>
        <h1 id="something">Adopt Me</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  )
};

// eslint-disable-next-line no-undef
render(<App />, document.getElementById("root"));
