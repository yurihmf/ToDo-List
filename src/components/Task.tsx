import { ITask } from "./TaskList"

import styles from './Task.module.css'
import { CheckCircle, Circle, Trash } from "phosphor-react"

interface TaskProps {
    task: ITask;
    completeTask: (id: string) => void;
    deleteTask: (id: string) => void;
}

const Task = ({ task, completeTask, deleteTask }: TaskProps) => {
  return (
    <li className={task.completed ? styles.taskCompleted : styles.task}>
        <button 
            type="button" 
            className={styles.completeTask}
            onClick={() => completeTask(task.id)}
        >
            {task.completed ? 
                (
                    <CheckCircle size={17} weight="fill" />
                )
                :
                (
                    <Circle size={17} />
                )}
        </button>
        <p className={styles.text}>
            {task.content}
        </p>
        <button 
            type="button" 
            className={styles.deleteTask}
            onClick={() => deleteTask(task.id)}
        >
            <Trash size={14} />
        </button>
    </li>
  )
}

export default Task