import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        const {isLoggedIn} =this.state
        // let element;
        // element=isLoggedIn ? <HomePage/> :<LoginPage/>
        // if(isLoggedIn){
        //     //return <HomePage/>
        //     element=<HomePage/>
        // }else{
        //     //return <LoginPage/>
        //     element=<LoginPage/>
        // }
        return(
            <div>
                {isLoggedIn ? <HomePage/>:<LoginPage/>}
                {isLoggedIn && <HomePage/>}
              {/* {element}  */}
            </div>
        )
    }
}
