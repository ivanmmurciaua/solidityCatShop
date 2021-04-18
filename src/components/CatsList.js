import React, { Component } from 'react';
import './App.css';

class CatsList extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	    	account: '',
		    contract: null,
		    cats: [
		      	{
			      "id": "1",
			      "url": "./images/cat-images/1.jpg"
			    },
			    {
			      "id": "2",
			      "url": "./images/cat-images/2.jpg"
			    },
			    {
			      "id": "3",
			      "url": "./images/cat-images/3.jpg"
			    },
			    {
			      "id": "4",
			      "url": "./images/cat-images/4.jpg"
			    },
			    {
			      "id": "5",
			      "url": "./images/cat-images/5.jpg"
			    },
			    {
			      "id": "6",
			      "url": "./images/cat-images/6.jpg"
			    },
			    {
			      "id": "7",
			      "url": "./images/cat-images/7.jpg"
			    },
			    {
			      "id": "8",
			      "url": "./images/cat-images/8.jpg"
			    },
			    {
			      "id": "9",
			      "url": "./images/cat-images/9.jpg"
			    },
			    {
			      "id": "10",
			      "url": "./images/cat-images/10.jpg"
			    },
			    {
			      "id": "11",
			      "url": "./images/cat-images/11.jpg"
			    },
			    {
			      "id": "12",
			      "url": "./images/cat-images/12.jpg"
			    },
			    {
			      "id": "13",
			      "url": "./images/cat-images/13.jpg"
			    },
			    {
			      "id": "14",
			      "url": "./images/cat-images/14.jpg"
			    },
			    {
			      "id": "15",
			      "url": "./images/cat-images/15.jpg"
			    },
			    {
			      "id": "16",
			      "url": "./images/cat-images/16.jpg"
			    },
			    {
			      "id": "17",
			      "url": "./images/cat-images/17.jpg"
			    },
			    {
			      "id": "18",
			      "url": "./images/cat-images/18.jpg"
			    }
	      	]
	    }
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
	                  	 />
	                  </div>
	                  <input
	                    type='button'
	                    className='btn btn-block btn-primary'
	                    value='Adopt'
	                    style={{ width: '150px', display: 'inline-block' }}
	                  />
	                </div>
	              )
	            })}
	          </div>
		);
	}
}

export default CatsList;