import { Eat } from "../../../widgets/fitness/eat/Eat";
import { Training } from "../../../widgets/training/Training";
import styles from "./FullWidget.module.scss"

interface FullWidgetProps {
    type: string;
    onClose: () => void;
}

export const FullWidget = ({ type, onClose }: FullWidgetProps) => {
    const renderContent = () => {
        switch (type) {
            case 'nutrition-calories':
                return (
                    <Eat />
                );
            case 'nutrition-water':
                return (
                    <Eat />
                );
            case 'nutrition-meals':
                return (
                    <Eat />
                );
            case 'training-steps':
                return (
                    <Training />
                );
            case 'training-workout':
                return (
                    <Training />
                );
            case 'training-progress':
                return (
                    <Training />
                );
            default:
                return <div>No widgets</div>;
        }
    };

    return (
        <div className={styles.fullWidgetOverlay} onClick={onClose}>
            <div className={styles.fullWidgetContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.widgetBody}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};