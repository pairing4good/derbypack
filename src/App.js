import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga'

function App() {

  useEffect(() => {
    if(process.env.NODE_ENV === 'production'){
      ReactGA.initialize([{
        trackingId: 'UA-166929582-1',
        debug: true
      }])
      const pageView = window.location.pathname + window.location.search;
      console.log("pageView = " + pageView);
      ReactGA.pageview(pageView);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
