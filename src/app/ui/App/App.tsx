import styles from "./App.module.scss";
import { Desk } from "@/common/components/desk/Desk";
import { LeftBar } from "@/common/components/leftBar/LeftBar";

export const App = () => {
  return (
    <div className={styles.app}>
      <LeftBar />
      <Desk />
    </div>
  );
};
