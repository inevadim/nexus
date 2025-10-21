import { Routing } from "@/common/routing"
import styles from "./App.module.scss"
import { Desk, LeftBar } from "@/common/components"

function App() {
  return (
    <div className={styles.app}>
      <LeftBar />
      {/* <Desk /> */}
      <Routing />
    </div>
  )
}

export default App
