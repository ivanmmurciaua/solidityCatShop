import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

import CatsList from './CatsList';
import CryptoCat from '../abis/CryptoCat.json';

class App extends Component {

  state = { account: '', contracto: null }

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

    const networkId = await web3.eth.net.getId()
    const networkData = CryptoCat.networks[networkId]

    if(networkData) {
      const abi = CryptoCat.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contracto : contract })

      // Load Colors
      /*for (var i = 0; i < totalSupply; i++) {
        const color = await contract.methods.checkColor(i, this.state.account).call()
        this.setState({
          colors: [...this.state.colors, color]
        })*/

    }
    else {
      window.alert('Smart contract not deployed to detected network.')
    }
  } 
  
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
              <small className="text-white"><span id="account">{this.state.account}</span></small>
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
              account = {this.state.account}
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
