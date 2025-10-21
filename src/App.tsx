import styles from "./App.module.scss"
import { LeftBar, Desk } from "@/components"

function App() {
  return (
    <div className={styles.app}>
      <LeftBar />
      <Desk />
      {/* <AddWidget /> */}
    </div>
  )
}

export default App
