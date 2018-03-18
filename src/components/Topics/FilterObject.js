import React, {Component} from 'react'

export default class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            people: [
                {name:'Tommy',
                 age: 23},
                {name:'James',
                 status: 'Single'},
                {name:'Jerry',
                 status: 'Married'},
                {car: 'Honda',
                 age: 26}],
            userInput: '',
            filteredPeople: [],
        }

    }
    handleChange(value){
        this.setState({userInput:value});
    }

    filterPeople(prop){
      var people = this.state.people;
      var filteredPeople = [];
      for(let i = 0;i<people.length;i++){
          if(people[i].hasOwnProperty(prop)){
              filteredPeople.push(people[i]);
          }
      }
      this.setState({filteredPeople:filteredPeople});
    }
    render(){
        return(
            <div    className="puzzleBox filterObjectPB">
            <span   className="puzzleText">Original: {JSON.stringify(this.state.people,null,10)}</span>
            <input  className="inputLine" onChange={(event => this.handleChange(event.target.value))}></input>
            <button className="ConfirmationButton" onClick={()=>this.filterPeople(this.state.userInput)}>Filter</button>
            <span   className="resultsBox filterObjectRB">Filtered Object: {JSON.stringify(this.state.filteredPeople,null,10)}</span>
            <h4>Filter Object</h4>
            </div>
        )
    }
}