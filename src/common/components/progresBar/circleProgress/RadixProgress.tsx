import * as React from "react"
import * as Progress from "@radix-ui/react-progress"
import styles from "./RadixProgress.module.scss"

interface CircleProgressProps {
  value: number
  max?: number
  size?: number
  variant?: "default" | "success" | "warning" | "danger"
  arcLength?: number
}

export const CircleProgress: React.FC<CircleProgressProps> = ({
  value,
  max = 100,
  size = 150,
  variant = "default",
  arcLength = 360,
}) => {
  const progress = (value / max) * 100
  const radius = 45
  const circumference = 2 * Math.PI * radius
  //const offset = circumference - (progress / 100) * circumference

  const visibleCircumference = (arcLength / 360) * circumference
  const offset = visibleCircumference - (progress / 100) * visibleCircumference

  return (
    <Progress.Root
      className={`${styles.container} ${styles[`variant--${variant}`]}`}
      style={{ width: size, height: size }}
      value={value}
      max={max}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        style={{ transform: `rotate(${-90 + (360 - arcLength) / 2}deg)` }}
      >
        {/* <circle className={styles.track} cx="50" cy="50" r={radius} /> */}
        <Progress.Indicator asChild>
          <circle
            className={styles.indicator}
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={visibleCircumference}
            strokeDashoffset={offset}
            pathLength={visibleCircumference}
          />
        </Progress.Indicator>
      </svg>
      <div className={styles.labelsContainer}>
        <div className={styles.valueLabel}>{Math.round(progress)}%</div>
        <div className={styles.goalLabel}>{Math.round(max)} ККал</div>
      </div>
    </Progress.Root>
  )
}
