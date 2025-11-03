import * as React from "react"
import * as Progress from "@radix-ui/react-progress"
import styles from "./LinearProgress.module.scss"

interface LinearProgressProps {
  value: number
  max?: number
  height?: number
  variant?: "default" | "success" | "warning" | "danger"
  showLabels?: boolean
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  value,
  max = 100,
  height = 8,
  variant = "default",
  showLabels = true,
}) => {
  const progress = (value / max) * 100

  return (
    <div className={styles.wrapper}>
      <Progress.Root
        className={`${styles.container} ${styles[`variant--${variant}`]}`}
        style={{ height }}
        value={value}
        max={max}
      >
        {/* Фоновая дорожка */}
        <div className={styles.track} />

        {/* Индикатор прогресса */}
        <Progress.Indicator asChild>
          <div className={styles.indicator} style={{ width: `${progress}%` }} />
        </Progress.Indicator>
      </Progress.Root>

      {/* Метки */}
      {showLabels && (
        <div className={styles.labelsContainer}>
          <div className={styles.valueLabel}>{Math.round(value)}</div>
          <div className={styles.maxLabel}>/ {Math.round(max)}</div>
        </div>
      )}
    </div>
  )
}
