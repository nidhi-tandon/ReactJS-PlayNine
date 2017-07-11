import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Star=(props)=>{
	let numOfStars=1+Math.floor(Math.random()*9)
	return(
		<div>
            {
                [...Array(numOfStars).keys()].map(x => <span className="glyphicon glyphicon-asterisk star"
															 aria-hidden="true"></span>)
            }
		</div>

	)
}
const Answers=(props)=>{
	return(
		<div>
		{props.selectedNumbers.map((value)=><span className="span-numbers">{value}</span>
		)}
		</div>
	)
}
const Button=(props)=>{
    return(
        <div>
			<button type="button" class="btn btn-success" style={{backgroundColor:'rgb(138,220,248)'}}>=</button>
        </div>

    )
}
const Numbers=(props)=> {
    const nameOfNumberClass = (number) => {
        if (props.selectedNumbers.indexOf(number)>=0)
        {
            return 'selected'
        }
    }


    return(
        <div className="card ">
            {
                [...Array(10).keys()].map(x => <span className={nameOfNumberClass(x), "span-numbers"}  >{++x}</span>)
            }

        </div>

    )
}
class App extends Component {
	constructor(){
		super()
        this.state={
            selectedNumbers:[2,4]
        }
	}

  render() {
	return (
	  <div className="container-fluid">
		<div className="row App-header" style={{height:240}} >
			<div className="col-lg-4">
			</div>
			<div className="col-lg-4 App-intro">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		</div>
		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				  <h2>Welcome to React</h2>
				  <br/>
			  </div>
		  </div>

		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				  <Star/>
			  </div>
		  </div>
		  <br/>
		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				 <Button/>
			  </div>
		  </div>
		  <br/>
		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				  <Answers selectedNumbers={this.state.selectedNumbers}/>
			  </div>
		  </div>
		  <br/>
		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				  <Numbers selectedNumbers={this.state.selectedNumbers}/>
			  </div>
		  </div>
	  </div>
	);
  }
}

export default App;
