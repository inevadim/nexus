import { useState } from "react";
import styles from "./Widget.module.scss";
import { FullWidget } from "../fullWidget/FullWidget";

interface WidgetProps {
  type: string;
  component: React.ComponentType;
  onRemove?: () => void;
}

export const Widget = ({
  type,
  component: Component,
  onRemove,
}: WidgetProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleOpenFull = () => {
    setIsFullScreen(true);
  };

  const handleCloseFull = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      <div className={styles.widget}>
        <div className={styles.widgetHeader}>
          <span>Тип: {type}</span>
          <div className={styles.widgetActions}>
            <button
              className={styles.fullScreenButton}
              onClick={handleOpenFull}
            >
              Открыть полностью
            </button>
            {onRemove && (
              <button className={styles.removeButton} onClick={onRemove}>
                ×
              </button>
            )}
          </div>
        </div>
        <div className={styles.widgetPreview}>
          <Component />
        </div>
      </div>
      {isFullScreen && (
        <FullWidget
          type={type}
          component={Component}
          onClose={handleCloseFull}
        />
      )}
    </>
  );
};
