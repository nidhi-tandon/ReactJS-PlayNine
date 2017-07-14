import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Star=(props)=>{
	return(
		<div>
            {
                [...Array(props.numOfStars).keys()].map(x => <span className="glyphicon glyphicon-asterisk star"
															 aria-hidden="true"></span>)
            }
		</div>

	)
}
const Answers=(props)=>{
	return(
		<div>
		{props.selectedNumbers.map((value)=><span className="span-numbers" onClick={()=>props.unselectNumber(value)}>{value}</span>
		)}
		</div>
	)
}
const Button=(props)=>{
	let button;
	switch (props.answerIsCorrect){
		case true:
            button=
				<button type="button" className="btn btn-success"
						onClick={()=> props.acceptAnswer()}>
						<span className="glyphicon glyphicon-ok"></span>
				</button>
			break;
        case false:
            button=
				<button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span></button>
            break;
		default:
			button=
				<button type="button" className="btn btn-primary"
						disabled={props.selectedNumbers.length==0}
						onClick={()=>props.checkAnswer()}>=</button>
			break;

	}
    return(
        <div className="col-sm-2" style={{marginLeft:60}}>
			{button}
			<br/>
			<br/>
			<button type="button" className="btn btn-warning " disabled={props.redraws==0} onClick={()=>props.redraw()}>
				<span className="glyphicon glyphicon-repeat">{props.redraws}</span>
			</button>
        </div>

    )
}
const Numbers=(props)=> {
    const nameOfNumberClass = (number) => {
        if (props.usedNumbers.indexOf(number)>=0)
        {
            return 'used'
        }
        if (props.selectedNumbers.indexOf(number)>=0)
        {
           return 'selected'
        }
        else {
        	return 'span-numbers'
		}
    }

    return(
        <div className="card ">
            {
                [...Array(10).keys()].map(x => <span className={nameOfNumberClass(x)}
													 onClick={ ()=> props.selectNumber(x) }>{x}</span>)
            }

        </div>

    )
}

const DoneFrame=(props)=>{
	return(
		<div>
			{props.doneStatus}
		</div>
	)
}
class App extends React.Component {
	static randomNumber = () =>  1 + Math.floor(Math.random() * 9)
	constructor(){
		super()
        this.state={
            selectedNumbers:[],
			randomNumOfStars:App.randomNumber(),
            answerIsCorrect:null,
			usedNumbers:[],
			redraws:5,
			doneStatus:'Game Over'
        }

        this.selectNumber = (clickedNumber)=>{
			if(this.state.selectedNumbers.indexOf(clickedNumber)>=0) return;
			this.setState({answerIsCorrect:null,selectedNumbers:this.state.selectedNumbers.concat(clickedNumber)})
		}

		this.unselectNumber=(clickedNumber)=>{
			this.setState({selectedNumbers:this.state.selectedNumbers.filter(number=> number!=clickedNumber), answerIsCorrect:null})
		}

		this.checkAnswer=()=>{
			this.setState({answerIsCorrect: this.state.randomNumOfStars === this.state.selectedNumbers.reduce((sum,values)=> sum+values ,0)})
		}

		this.acceptAnswer=()=>{
			this.setState({usedNumbers:this.state.usedNumbers.concat(this.state.selectedNumbers),
				           selectedNumbers:[], answerIsCorrect:null, randomNumOfStars:App.randomNumber()})
		}

		this.redraw=()=>{
			if(this.state.redraws==0) return;
			this.setState({randomNumOfStars:App.randomNumber(), selectedNumbers:[], answerIsCorrect:null , redraws:this.state.redraws-1})
		}
	}

  render() {
		const {selectedNumbers, randomNumOfStars, answerIsCorrect, usedNumbers, doneStatus}=this.state
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
				  <Star numOfStars={randomNumOfStars}/>
			  </div>
		  </div>
		  <br/>
		  <div className="row">
			  <div className="col-lg-5">
			  </div>
			  <div className="col-lg-4 App-intro">
				 <Button selectedNumbers={selectedNumbers}
						 checkAnswer={this.checkAnswer.bind(this)}
				 		 answerIsCorrect={answerIsCorrect}
						 acceptAnswer={this.acceptAnswer.bind(this)}
				         redraw={this.redraw.bind(this)}
				         redraws={this.state.redraws}/>
			  </div>
		  </div>
		  <br/>
		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				  <Answers selectedNumbers={selectedNumbers}
						   unselectNumber={this.unselectNumber.bind(this)}/>
			  </div>
		  </div>
		  <br/>
		  <div className="row">
			  <div className="col-lg-4">
			  </div>
			  <div className="col-lg-4 App-intro">
				  {doneStatus?<DoneFrame doneStatus={doneStatus}/>:<Numbers selectedNumbers={selectedNumbers}
													selectNumber={this.selectNumber.bind(this)}
													usedNumbers={usedNumbers}/>}

			  </div>
		  </div>

	  </div>
	);
  }
}

export default App;
