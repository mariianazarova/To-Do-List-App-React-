import {useState} from 'react';
import ReactDOM from "react-dom/client";
import AddTask from './components/AddTask';
import ToDo from './components/ToDo';
import "./index.css";

const App = () => {
const [toDo, setToDo] = useState([]);
const [newTask, setNewTask] = useState('');


const addTask = () => {
  if(newTask) {
    const num = toDo.length + 1; 
    const newEntry = { id: num, title: newTask, status: false }
    setToDo([...toDo, newEntry])
    setNewTask('');
  }
}

const deleteTask = (id) => {
  let newTasks = toDo.filter( task => task.id !== id)
  setToDo(newTasks);
}
const markDone = (id) => {
  let newTask = toDo.map( task => {
    if( task.id === id ) {
      return ({ ...task, status: !task.status })
    }
    return task;
  })
  setToDo(newTask);
}
  return (
    <div className="App">
     <br /><br />
    <h2>To Do List App</h2>
    <br /><br />

    
    <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
     />
    
  
    {toDo && toDo.length ? '' : 'You do not have tasks ...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      deleteTask={deleteTask}
    />  

    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
