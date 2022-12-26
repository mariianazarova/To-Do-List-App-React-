import React from 'react';

const ToDo = ({ toDo, markDone, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="addTask">
            <div className="taskBg">
              <div className={ task.status ? 'done , row' : 'row' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              
            </div>
            <div className="wrapperDoneDelete">
                <span
                  onClick={ () => markDone(task.id) }
                >
                  <button className="btnDone"> Done </button>
                </span>
               
                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <button className='btnDelete'> Delete </button>
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;