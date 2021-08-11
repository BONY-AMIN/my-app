import React from 'react'
import Card from './components/Card'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import STATE from './components/STATE'
import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/conditional_rendering'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/event_handler_class'
import EVENT_BINDING from './EVENT_BINDING'
import HOOKS_USESTATE from './HOOKS_USESTATE/index'
import FORM from './FORM/form'
import './index.css'
import data from './data.json'

export default function App() {
//     let items=[];
//    items= data.map((item,index) => <Card key={index} titleText={item.title} todoDes={item.desc}/>)
    // for(let i=0;i<data.length;i++){
    // items.push(<Card titleText={data[i].title} todoDes={data[i].desc}/>)
    // }
    return (
          <div>
            <Card1/>
            {/* <HOOKS_USESTATE/> */}
            {/* <EVENT_BINDING/> */}
            {/* <EVENT_HANDLER_CLASS/> */}
            {/* <CONDITIONAL_RENDERING/> */}
          
          {/* <STATE/> */}
          {/* <Card1  name='Card1' des='This Is Card One Desc'/>
          <Card2 name='Card2'/> */}

      {/* <h1 className="headStyle">ToDo App</h1>
      <Card titleText={data[0].title} todoDes={data[0].desc}/>
      <Card titleText='Love My Parents' todoDes='Love My Parent Then Anything Else3'/>
      {items}
      {data.map((item,index) => <Card key={index} titleText={item.title} todoDes={item.desc}/>)} */}


    {/* <h2 style={headStyle}>To Do</h2>
    <h2 className="headStyle tSize">Html</h2>
    <h2>{todo}</h2>
    <h2>{dateDay+"-"+month+"-"+year}</h2> */}
        </div>
    )
}
