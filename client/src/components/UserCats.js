import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CryptoCat from "../contracts/CryptoCat.json";
import getWeb3 from "./getWeb3";
import CatsList from './CatsList';

import './App.css';

class UserCats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      switchh : 0,
      cats: []
    }
  }

  componentDidMount = async () => {

    try{

      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CryptoCat.networks[networkId];
      const instance = new web3.eth.Contract(
        CryptoCat.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const totalSupply = await instance.methods.totalSupply().call();

      // Load Cats
      for (var i = 0; i < totalSupply; i++) {
        const cat = await instance.methods.check_CryptoCat(i, accounts[0]).call()
        this.setState({
          cats: [...this.state.cats, cat]
        })
      }

    }
    catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

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
              <small className="text-white"><span id="account"></span></small>
            </li>
          </ul>
        </nav>
        <div className="mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 text-center">
              <div className="content mr-auto ml-auto">
                <h1> <span role="img" aria-label="ninja-cat">🐱‍👤</span> My CryptoCats <span role="img" aria-label="ninja-cat">🐱‍👤</span> </h1>
                <hr/>
              </div>
            </main>
          </div>
          <div className="mt-3">
            <CatsList 
              cats = {this.state.cats}
              switchh = {this.state.switchh}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserCats;


/*
import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import {Link} from 'react-router-dom';
import CatsList from './CatsList';
import CryptoCat from '../abis/CryptoCat.json';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: []
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

    const networkId = await web3.eth.net.getId()
    const networkData = CryptoCat.networks[networkId]
    if(networkData) {
      const abi = CryptoCat.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
      const totalSupply = await contract.methods.totalSupply().call()
      this.setState({ totalSupply })
      // Load Colors
      for (var i = 0; i < totalSupply; i++) {
        const color = await contract.methods.check_CryptoCat(i, this.state.account).call()
        this.setState({
          colors: [...this.state.colors, color]
        })
      }
    } else {
      window.alert('Smart contract not deployed to detected network.')
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
              <small className="text-white"><span id="account"></span></small>
            </li>
          </ul>
        </nav>
        <div className="mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 text-center">
              <div className="content mr-auto ml-auto">
                <h1> <span role="img" aria-label="ninja-cat">🐱‍👤</span> My CryptoCats <span role="img" aria-label="ninja-cat">🐱‍👤</span> </h1>
                <hr/>
              </div>
            </main>
          </div>
          <div className="mt-3">
            <div className="row text-center">
              { this.state.colors.map((color,key) => {
                return(
                  <div key={key} className="col-md-2">
                    <div className="cat">
                       <img
                        src={`./images/cat-images/${color}.jpg`}
                        alt={color}
                       />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
*/