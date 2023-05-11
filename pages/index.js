import axios from 'axios';

import Bot2 from "./Components/bot2"

import Header from "./Components/Header"

import Body from "./Components/Body"
import Bot from "./Components/bot"
import { useEffect, useState } from 'react';




export default function App() {


  const [tasks,setTasks]=useState(
    {
      taskId:0,
      taskName:'Test Task',
      selectedText:''

    }
  )

  function handleTasks (taskId,taskName,selectedText){
    setTasks({taskId,taskName,selectedText})
    
  }

















  
  
  return (
    <>
     <Header/>
      <Bot2/>
      <Bot tasks={tasks} />
      <Body  handleTasks={handleTasks} /> 

     
    </>
  );
}
