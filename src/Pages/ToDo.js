import React, { useState, useRef, createElement } from 'react';
import { useForm } from 'react-hook-form';

import '../Styles/Todo.css';

function ToDo() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [aTask, addATask] = useState("");
/*   const [task, isTask] = useState(false);
 */
  const tasks = [];

  const addTask = () => {
    tasks.splice(tasks.length - 1, 0, aTask )
    reset()
  }

/*   const cancel = () => {
    isTask(false)
  } */

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
        <input onChange={(e) => addATask(e.target.value)} style={{width: "50%", justifySelf: "center", padding: "10px", fontSize: "30px"}} type='text'/>
        <button onClick={handleSubmit(addTask)} style={{backgroundColor: "blue", border: "none", color: "white", width: "5%", fontSize: "20px"}}>Add</button>
      </div>
      {tasks.map((dat) => 
        <div id='taskCover'>
          <div id='maintask'>
            <span id='task'>{dat}</span>
            <span id='cancel' /* onClick={() => tasks.splice(tasks.indexOf(dat), 1)} */>X</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToDo;