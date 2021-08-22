import React, { Component } from 'react';
//import Web3 from 'web3'
import './App.css';
import {Link} from 'react-router-dom';
import CatsList from './CatsList';


class CatsHome extends Component {

  constructor(props) {
      super(props)
      this.state = {
        switchh : 1,
        cats: [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,
                38,39,40,41,42,43,44,45,46,47,48
              ]
      }
   }
  
  render() {

    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <Link
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            to="/"
            rel="noopener noreferrer"
          >
            Cat-De Shop in Ethereum
          </Link>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">
              <Link 
                className="navbar-brand col-sm-3 col-md-2 mr-0" 
                rel="noopener noreferrer"
                to='/usercats'><span id="account">My CryptoCats -> {this.props.account}</span>
              </Link>
              </small>
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
            <CatsList
              account = {this.props.account}
              contract = {this.props.contract}
              cats = {this.state.cats}
              switchh = {this.state.switchh}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CatsHome;
