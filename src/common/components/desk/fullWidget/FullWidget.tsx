import { Food } from "@/features/fitness/food/ui/Food";
import styles from "./FullWidget.module.scss";
import { Training } from "@/features/fitness/training/ui/Training";

interface FullWidgetProps {
  type: string;
  onClose: () => void;
}

export const FullWidget = ({ type, onClose }: FullWidgetProps) => {
  const renderContent = () => {
    switch (type) {
      case "nutrition-calories":
        return <Food />;
      case "nutrition-water":
        return <Food />;
      case "nutrition-meals":
        return <Food />;
      case "training-steps":
        return <Training />;
      case "training-workout":
        return <Training />;
      case "training-progress":
        return <Training />;
      default:
        return <div>No widgets</div>;
    }
  };

  return (
    <div className={styles.fullWidgetOverlay} onClick={onClose}>
      <div
        className={styles.fullWidgetContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.widgetBody}>{renderContent()}</div>
      </div>
    </div>
  );
};
