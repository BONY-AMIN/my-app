import React, { Component } from 'react'

export default class event_handler_class extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            ChangeEvent:''
       }
   }
    eventhandler=(e)=>{
        this.setState({
            ChangeEvent:e.target.value
        },()=>{
            console.log(e.target.value);
        })
    }
   
    render() {
        return (
            <div>
            <input type="text" onChange={this.eventhandler}></input>
            <h2>{this.state.ChangeEvent}</h2>
            </div>
        )
    }
}
