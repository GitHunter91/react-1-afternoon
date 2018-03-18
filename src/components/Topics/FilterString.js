import React, {Component} from 'react'

export default class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            names:["Tom",
                   "Dick",
                   "Harry",
                   "Veronica",
                   "Jacob",
                   "Jessica",
                   "Ryan",
                   "Hannah",
                   "Derrick",
                   "Elliot",
                   "Emily"],
            userInput:'',
            filteredArray: []
        }
    }
    handleChange(value){
        this.setState({userInput: value})
    }
    stringFilter(userInput){
        let names = this.state.names;
        let filteredArray = [];
        for(let i=0;i<names.length;i++){
            if(names[i].includes(userInput)){
                filteredArray.push(names[i]);
            }
        }
        this.setState({filteredArray : filteredArray});
    }
    render(){
        return(
            <div    className="puzzleBox filterStringPB">
            <span   className="puzzleText">Original:{JSON.stringify(this.state.names,null,10)}</span>
            <input  className="inputLine" onChange={(event)=>this.handleChange(event.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.stringFilter(this.state.userInput)}>Filter</button>
            <span   className="resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredArray,null,10)}</span>
            <h4>Filter String</h4>
            </div>
        )

    }
}