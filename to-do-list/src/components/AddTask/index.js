const AddTask = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
          <div className="addTask">
          <div>
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="addInput"
            />
          </div>
          <div>
            <button
              onClick={addTask}
              className="btnAdd"
            >Add Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTask;