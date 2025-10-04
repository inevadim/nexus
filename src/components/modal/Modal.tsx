import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Modal.module.scss";
import { changeVisible } from "@/app/model/features/modal/modalSlice";
import { Eat } from "@/features/eat/Eat";
import { Training } from "@/features/fitness/training/ui/Training";

interface ModalProps {
  onAddWidget: (type: string, component: React.ComponentType) => void;
}

type ModalContent = "main" | "nutrition" | "training";

const widgetComponents = {
  Питание: Eat,
  Тренировки: Training,
};

export const Modal = ({ onAddWidget }: ModalProps) => {
  const dispatch = useDispatch();
  const [currentContent, setCurrentContent] = useState<ModalContent>("main");

  const handleClose = () => {
    dispatch(changeVisible());
  };

  const handleAddWidget = (type: keyof typeof widgetComponents) => {
    onAddWidget(type, widgetComponents[type]);
    handleClose();
  };

  const handleBackToMain = () => {
    setCurrentContent("main");
  };

  const nutritionContent = (
    <div className={styles.content}>
      <h3>Питание</h3>
      <p>Выберите тип виджета питания:</p>
      <button onClick={() => handleAddWidget("Питание")}>Виджет питания</button>
      <button onClick={handleBackToMain}>Назад</button>
    </div>
  );

  const trainingContent = (
    <div className={styles.content}>
      <h3>Тренировки</h3>
      <p>Выберите тип виджета тренировок:</p>
      <button onClick={() => handleAddWidget("Тренировки")}>
        Виджет тренировок
      </button>

      <button onClick={handleBackToMain}>Назад</button>
    </div>
  );

  const mainContent = (
    <div className={styles.content}>
      <h2>Выберите категорию</h2>
      <button
        className={styles.categoryButton}
        onClick={() => setCurrentContent("nutrition")}
      >
        Питание
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => setCurrentContent("training")}
      >
        Тренировки и Шаги
      </button>
    </div>
  );

  return (
    <div className={styles.wrapModal} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {currentContent === "main" && mainContent}
        {currentContent === "nutrition" && nutritionContent}
        {currentContent === "training" && trainingContent}
      </div>
    </div>
  );
};
