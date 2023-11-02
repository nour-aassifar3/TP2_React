import React, { useState } from 'react'
import Task from './task'
import {v4 as uuidy4} from 'uuid';
import './style.css'
export default function Form_task() {
    const [tasks,settasks]=useState([
        {id:uuidy4(),nom:'Sport'},
        {id:uuidy4(),nom:'REACT'},
        {id:uuidy4(),nom:'FIGMA'}
    ])
    const [task,setTask]=useState('');
    const addTask=()=>{
      let ntasks=[...tasks];
      let ntask={};
       
     ntask.id=uuidy4();

     ntask.nom=task;

     ntasks.push(ntask);
     settasks(ntasks);
     setTask('');

    }
    const supp=(idp)=>{
        alert('Etes-vous sûr de vouloir supprimer cette tâche'+idp+' ?');
  
        let ntasks=tasks.filter((t)=>{
          return t.id!=idp
        })
        settasks(ntasks);
      }
  return (
    <div>
        <center>
      <h1>Bonjour Nour</h1>
      <form >
 <input type='text' id="n1" placeholder='saisir une nouvelle tache ' value={task} onChange={(e)=>{setTask(e.target.value)}}/><input id="n" type='button' onClick={addTask} value="Ajouter" />

      </form>
      <br/><br/>
      {
            tasks.map((t)=>{
                return <p key={t.id}><Task delf={()=>supp(t.id)} txt={t.nom}/> </p> 
            })
        }
      
        
      </center>
    </div>
  ) 
}



