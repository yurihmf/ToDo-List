
import { PlusCircle } from 'phosphor-react'
import styles from './CreateTask.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface CreateTaskProps {
  createTask: (text: string) => void;
}

const CreateTask = ({ createTask }: CreateTaskProps) => {
  const [taskText, setTaskText] = useState<string>('');

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();

    createTask(taskText);
    setTaskText('');
  }

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
}

  const handleTaskTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setTaskText(event.target.value);
  }

  const isTaskTextEmpty = taskText.length === 0;

  return (
    <form onSubmit={handleCreateTask} className={styles.createTaskForm}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          value={taskText}
          onInvalid={handleNewTaskInvalid}
          onChange={handleTaskTextChange}
        />
        <button className={styles.button} type='submit' disabled={isTaskTextEmpty}>
            Criar
            <PlusCircle size={18} />
        </button>
    </form>
  )
}

export default CreateTask