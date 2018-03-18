import React, { Component } from 'react';

export default class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(value){
        this.setState({ userInput: value });
    }
    assignEvenAndOdds(userInput) {
        var arr = userInput.split(',');
        var evens =  [];
        var odds = [];
      for(let i=0;i<arr.length;i++){
          if(arr[i]%2===0){
              evens.push(parseInt(arr[i],10));
          }
          else if(arr[i]%2!==0){
              odds.push(parseInt(arr[i],10));
          }
          this.setState({evenArray:evens,oddArray:odds});
      }
    }
    render(){
        return( 
            <div className="puzzleBox evenAndOddPB">
            <input className="inputLine" onChange={ (event => this.handleChange(event.target.value))}></input>
            <button className="confirmationButton" onClick={()=> this.assignEvenAndOdds(this.state.userInput)}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>            
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            <h4>Evens And Odds </h4>
            </div>
        )
    }
}