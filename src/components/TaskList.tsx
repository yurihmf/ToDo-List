import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CreateTask from './CreateTask'
import Empty from './Empty'
import styles from './TaskList.module.css'
import Task from './Task';

 export interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

const TaskList = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const createTask = (content: string) => {
    const id = uuidv4();

    setTaskList([...taskList, { id, content, completed: false}])
  }

  const completeTask = (id: string) => {
      const taskListWithCompletedTask = taskList.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }

        return task
      })

      setTaskList(taskListWithCompletedTask)
  }

  const deleteTask = (id: string) => {
    const taskListWithoutDeletedTask = taskList.filter(task => task.id !== id)

    setTaskList(taskListWithoutDeletedTask)
  }
  
  const tasksCreated = taskList.length;

  const completedTasks = taskList.reduce((count, task) => {
      if (task.completed) {
         return count+= 1
      }

      return count
  }, 0)

  return (
    <main className={styles.container}>
        <CreateTask createTask={createTask} />
        <div className={styles.taskInfos}>
            <div className={styles.createdTasks}>
              Tarefas criadas
              <span className={styles.count}>{tasksCreated}</span>
            </div>
            <div className={styles.completedTasks}>
              Concluídas
              <span className={styles.count}>
                {tasksCreated === 0 
                  ? 0 
                  : 
                    `${completedTasks} de ${tasksCreated}`
                  }</span>
            </div>
        </div>

        {tasksCreated === 0 ? <Empty /> : 
        (
          <ul className={styles.taskList}>
            {taskList.map((task) => (
              <Task 
                key={task.id}
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        )}
    </main>
  )
}

export default TaskList