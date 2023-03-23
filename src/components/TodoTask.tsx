import React from 'react'
import { ITask } from '../interfaces'


interface Props {
    task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
      <div className='task'>
          <div className='content'>
              <span>{ task.taskName}</span>
          </div>
          <button>x</button>
    </div>
  )
}

export default TodoTask