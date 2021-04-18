import React, { Component } from 'react';
//import logo from '../logo.png';
import './App.css';
import CatsList from './CatsList';

class App extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cat-De Shop in Ethereum
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">0x...</span></small>
            </li>
          </ul>
        </nav>
        <div className="mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 text-center">
              <div className="content mr-auto ml-auto">
                <h1> <span role="img" aria-label="ninja-cat">🐱‍👤</span> 0xfeD Cat De-Shop <span role="img" aria-label="ninja-cat">🐱‍👤</span> </h1>
                <hr/>
              </div>
            </main>
          </div>
          <div className="mt-3">
            <CatsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
