import * as React from "react"
import * as Progress from "@radix-ui/react-progress"
import styles from "./LinearProgress.module.scss"

interface LinearProgressProps {
  value: number
  max?: number
  height?: number
  width?: number
  variant?: "default" | "success" | "warning" | "danger"
  showLabels?: boolean
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  value,
  max = 100,
  height = 15,
  width = 100,
  variant = "default",
  showLabels = true,
}) => {
  const progress = (value / max) * 100

  return (
    <Progress.Root
      className={`${styles.container} ${styles[`variant--${variant}`]}`}
      style={{ height, width }}
      value={value}
      max={max}
    >
      <div className={styles.wrapper}>
        {/* Фоновая дорожка */}
        <div className={styles.track} />

        {/* Индикатор прогресса */}
        <Progress.Indicator asChild>
          <div className={styles.indicator} style={{ width: `${progress}%` }} />
        </Progress.Indicator>
      </div>

      {/* Метки */}
      {showLabels && (
        <div className={styles.labelsContainer}>
          <div className={styles.valueLabel}>{Math.round(value)}</div>
          <div className={styles.maxLabel}>/ {Math.round(max)}</div>
        </div>
      )}
    </Progress.Root>
  )
}
