import React, { useState, useRef, createElement } from 'react';

import '../Styles/Todo.css';

function ToDo() {
  const [newTask, addNewTask] = useState('');
  const [task, isTask] = useState(false);

  const tasks = [];

  const cancel = () => {
    isTask(false)
  }

/*     const addTask = 
    createElement("div", {id: 'taskCover'}, 
      createElement('div', {id: 'maintask'}, 
          createElement('span', {id: 'task'}, newTask),
          createElement('span', {id: 'cancel', onClick: cancel}, "X")
      )
    ) */

  return (
    <div style={{paddingTop: "20px"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <input onChange={(e) => {addNewTask(e.target.value);}} style={{width: "50%", justifySelf: "center", padding: "10px", fontSize: "30px"}} type='text'/>
        <button onClick={tasks.push(newTask)} style={{backgroundColor: "blue", border: "none", color: "white", width: "5%", fontSize: "20px"}}>Add</button>
      </div>
      {tasks?.map((dat, i) => 
        <div id='taskCover' key={i}>
          <div id='maintask'>
            <span id='task'>{dat}</span>
            <span id='cancel' onClick={tasks[tasks.indexOf(dat)]}>X</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToDo;