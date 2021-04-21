import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import CryptoCat from '../abis/CryptoCat.json';

class CatsList extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	    	account : '',
	    	contract: null,
		    cats: [
			      	{ "id": "1", "url": "./images/cat-images/1.jpg" }, 
					{ "id": "2", "url": "./images/cat-images/2.jpg" }, 
					{ "id": "3", "url": "./images/cat-images/3.jpg" }, 
					{ "id": "4", "url": "./images/cat-images/4.jpg" }, 
					{ "id": "5", "url": "./images/cat-images/5.jpg" }, 
					{ "id": "6", "url": "./images/cat-images/6.jpg" }, 
					{ "id": "7", "url": "./images/cat-images/7.jpg" }, 
					{ "id": "8", "url": "./images/cat-images/8.jpg" }, 
					{ "id": "9", "url": "./images/cat-images/9.jpg" }, 
					{ "id": "10", "url": "./images/cat-images/10.jpg" }, 
					{ "id": "11", "url": "./images/cat-images/11.jpg" }, 
					{ "id": "12", "url": "./images/cat-images/12.jpg" }, 
					{ "id": "13", "url": "./images/cat-images/13.jpg" }, 
					{ "id": "14", "url": "./images/cat-images/14.jpg" }, 
					{ "id": "15", "url": "./images/cat-images/15.jpg" }, 
					{ "id": "16", "url": "./images/cat-images/16.jpg" }, 
					{ "id": "17", "url": "./images/cat-images/17.jpg" }, 
					{ "id": "18", "url": "./images/cat-images/18.jpg" }, 
					{ "id": "19", "url": "./images/cat-images/19.jpg" }, 
					{ "id": "20", "url": "./images/cat-images/20.jpg" }, 
					{ "id": "21", "url": "./images/cat-images/21.jpg" }, 
					{ "id": "22", "url": "./images/cat-images/22.jpg" }, 
					{ "id": "23", "url": "./images/cat-images/23.jpg" }, 
					{ "id": "24", "url": "./images/cat-images/24.jpg" }, 
					{ "id": "25", "url": "./images/cat-images/25.jpg" }, 
					{ "id": "26", "url": "./images/cat-images/26.jpg" }, 
					{ "id": "27", "url": "./images/cat-images/27.jpg" }, 
					{ "id": "28", "url": "./images/cat-images/28.jpg" }, 
					{ "id": "29", "url": "./images/cat-images/29.jpg" }, 
					{ "id": "30", "url": "./images/cat-images/30.jpg" }, 
					{ "id": "31", "url": "./images/cat-images/31.jpg" }, 
					{ "id": "32", "url": "./images/cat-images/32.jpg" }, 
					{ "id": "33", "url": "./images/cat-images/33.jpg" }, 
					{ "id": "34", "url": "./images/cat-images/34.jpg" }, 
					{ "id": "35", "url": "./images/cat-images/35.jpg" }, 
					{ "id": "36", "url": "./images/cat-images/36.jpg" }, 
					{ "id": "37", "url": "./images/cat-images/37.jpg" }, 
					{ "id": "38", "url": "./images/cat-images/38.jpg" }, 
					{ "id": "39", "url": "./images/cat-images/39.jpg" }, 
					{ "id": "40", "url": "./images/cat-images/40.jpg" }, 
					{ "id": "41", "url": "./images/cat-images/41.jpg" }, 
					{ "id": "42", "url": "./images/cat-images/42.jpg" }, 
					{ "id": "43", "url": "./images/cat-images/43.jpg" }, 
					{ "id": "44", "url": "./images/cat-images/44.jpg" }, 
					{ "id": "45", "url": "./images/cat-images/45.jpg" }, 
					{ "id": "46", "url": "./images/cat-images/46.jpg" }, 
					{ "id": "47", "url": "./images/cat-images/47.jpg" }, 
					{ "id": "48", "url": "./images/cat-images/48.jpg" }
	      	]
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
	      this.setState({ contract : contract })
	    }
	    else {
	      window.alert('Smart contract not deployed to detected network.')
	    }
	  }

	

	 mint = (cat) => {
	    this.state.contract.methods.mint(cat).send({ from: this.state.account });
	  }

	//Adopt
    handleClick = (e) => {
    	console.log(e.target.id);
    }

	render(){
		return(
			<div className="row text-center">
	            { this.state.cats.map((cat) => {
	              return(
	                <div key={cat.id} className="col-md-2">
	                  <div className="cat">
	                  	 <img
	                  	 	src={cat.url}
	                  	 	alt={cat.id}
	                  	 />
	                  </div>
	                  <form onSubmit={(event) => {
	                  	event.preventDefault()
	                 	const catz = cat.id
	                  	this.mint(catz)
	                  }}>
	                  <input
	                    type='submit'
	                    className='btn btn-block btn-primary'
	                    value='Adopt'
	                  />
	                  </form>
	                  
	                </div>
	              )
	            })}
	          </div>
		);
	}
}

export default CatsList;