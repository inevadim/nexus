import styles from './App.module.scss'
import { Desk } from './components/desk/Desk'
import { LeftBar } from './components/leftBar/LeftBar'

function App() {
  return (
    <div className={styles.app}>
      <LeftBar />
      <Desk />
    </div>
  )
}

export default App
