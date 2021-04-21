import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import {Link} from 'react-router-dom';
import CatsList from './CatsList';


class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
        account : '',
      }
   }

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {

    const web3 = window.web3

    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
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
                to='/usercats'><span id="account">My CryptoCats -> {this.state.account}</span>
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
            <CatsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
