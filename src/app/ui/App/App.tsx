import styles from "./App.module.scss";
import { Desk } from "@/common/components";
import { LeftBar } from "@/components/leftBar/LeftBar";

function App() {
  return (
    <div className={styles.app}>
      <LeftBar />
      <Desk />
    </div>
  );
}

export default App;
