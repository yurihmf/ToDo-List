import { Rocket } from 'phosphor-react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Rocket size={32} />
            <div className={styles.logoText}>
                to
                <span>do</span>
            </div>
        </div>
    </header>
  )
}

export default Header