
import { ClipboardText } from 'phosphor-react'
import styles from './Empty.module.css'

const Empty = () => {
  return (
    <div className={styles.empty}>
         <ClipboardText size={56} />
         <p className={styles.emptyText}>
            <strong>Você ainda não tem tarefas cadastradas</strong> 
            <br/>
            Crie tarefas e organize seus itens a fazer
        </p>
    </div>
  )
}

export default Empty