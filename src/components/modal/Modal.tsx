import { useState } from 'react';
import { useDispatch } from "react-redux";
import styles from "./Modal.module.scss";
import { changeVisible } from "./../../app/model/features/modal/modalSlice";

interface ModalProps {
    onAddWidget: (type: string) => void;
}

type ModalContent = 'main' | 'nutrition' | 'training';

export const Modal = ({ onAddWidget }: ModalProps) => {
    const dispatch = useDispatch();
    const [currentContent, setCurrentContent] = useState<ModalContent>('main');
    
    const handleClose = () => {
        dispatch(changeVisible());
    }

    const handleAddWidget = (type: string) => {
        onAddWidget(type);
        handleClose();
    }

    const handleBackToMain = () => {
        setCurrentContent('main');
    }

    const nutritionContent = (
        <div className={styles.content}>
            <h3>Питание</h3>
            <p>Выберите тип виджета питания:</p>
            <button onClick={() => handleAddWidget('nutrition-calories')}>Калории</button>
            <button onClick={() => handleAddWidget('nutrition-water')}>Вода</button>
            <button onClick={() => handleAddWidget('nutrition-meals')}>Приемы пищи</button>
            <button onClick={handleBackToMain}>Назад</button>
        </div>
    );

    const trainingContent = (
        <div className={styles.content}>
            <h3>Тренировки</h3>
            <p>Выберите тип виджета тренировок:</p>
            <button onClick={() => handleAddWidget('training-steps')}>Шаги</button>
            <button onClick={() => handleAddWidget('training-workout')}>Тренировка</button>
            <button onClick={() => handleAddWidget('training-progress')}>Прогресс</button>
            <button onClick={handleBackToMain}>Назад</button>
        </div>
    );

    const mainContent = (
        <div className={styles.content}>
            <h2>Выберите категорию</h2>
            <button 
                className={styles.categoryButton} 
                onClick={() => setCurrentContent('nutrition')}
            >
                Питание
            </button>
            <button 
                className={styles.categoryButton} 
                onClick={() => setCurrentContent('training')}
            >
                Тренировки
            </button>
        </div>
    );

    return (
        <div className={styles.wrapModal} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {currentContent === 'main' && mainContent}
                {currentContent === 'nutrition' && nutritionContent}
                {currentContent === 'training' && trainingContent}
            </div>
        </div>
    );
};