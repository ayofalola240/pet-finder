import React from 'react'
import { render } from 'react-dom'
import { Router } from "@reach/router";
import Details from "./details";
import SearchParams from './searchParams';

const App = () => {

  return (
    <React.StrictMode>
      <div>
        <h1 id="something">Adopt Me</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  )
};

// eslint-disable-next-line no-undef
render(<App />, document.getElementById("root"));
