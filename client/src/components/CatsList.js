import React, { Component } from 'react';
import './App.css';

class CatsList extends Component {

	mint = (cat) => {
		this.props.contract.methods.mint(cat).send({ from: this.props.account[0] });
	}

	render(){

		let adoptbutton;

		if(this.props.switchh){
			adoptbutton = <input
							type='submit'
							className='btn btn-block btn-primary'
				   			value='Adopt'
				   		 />;
		}

		return(
			<div className="row text-center">

	            { this.props.cats.map((cat,key) => {
	              return(
	                <div key={key} className="col-md-2">
	                  <div className="cat">
	                  	 <img
	                  	 	src={`./images/cat-images/cat${cat}.jpg`}
	                  	 	alt={cat}
	                  	 />
	                  </div>

	                  <form onSubmit={(event) => {
	                  	event.preventDefault()
	                 	const catz = cat.toString()
	                  	this.mint(catz)
	                  }}>

	                  {adoptbutton}

	                  </form>
	                  
	                </div>
	              )
	            })}
	          </div>
		);
	}
}

export default CatsList;