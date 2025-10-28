import styles from "./FullWidget.module.scss";

interface FullWidgetProps {
  type: string;
  component: React.ComponentType;
  onClose: () => void;
}

export const FullWidget = ({
  type,
  component: Component,
  onClose,
}: FullWidgetProps) => {
  return (
    <div className={styles.fullWidgetOverlay} onClick={onClose}>
      <div
        className={styles.fullWidgetContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.widgetBody}>
          <Component />
        </div>
      </div>
    </div>
  );
};
