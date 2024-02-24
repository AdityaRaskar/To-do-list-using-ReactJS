import './App.css';
import {useState } from 'react'


function App() {

  let [todolist,settodolist]=useState([])

  let saveTodoList=(event)=>{

    let todoname=event.target.todoname.value;
    
    // alert(todoname)
    if(!todolist.includes(todoname)){
      let finalTodolist=[...todolist,todoname]
      settodolist(finalTodolist)
    }
    else{
      alert("Already Exist with same name")
    }
    event.preventDefault(); // stops page refreshing on save btn press
  }


  let list=todolist.map((value,index)=>{
    return(
      <TodoListItems value={value} key={index} indexNum={index}
      todolist={todolist}
      settodolist={settodolist}
      />
    )
  }
  )
  return (

    <div className="App">
      
        <h1 className='title'>To do list</h1>

      <div className="outer">
      <form onSubmit={saveTodoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>

      <div className="list">
        <ul>
          {list}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;


function TodoListItems({value ,indexNum ,todolist,settodolist}){

  let deleteRow=()=>{
    // alert(`${indexNum}`)
    let finalTodolist_del = todolist.filter((v,i)=>i!==indexNum)
    settodolist(finalTodolist_del)

  }

  let [status,setstatus]=useState(true)

  let statusCheck=()=>{
    setstatus(!status)
  }
  return(
    <li class={(status) ? "" : "strikeList"} onClick={statusCheck}>{indexNum+1} {value}<span onClick={deleteRow}>&times;</span></li>
    )
}