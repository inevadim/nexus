import * as React from "react"
import * as Progress from "@radix-ui/react-progress"
import styles from "./CircleProgress.module.scss"

interface CircleProgressProps {
  value: number
  max?: number
  size?: number
  variant?: "default" | "success" | "warning"
}

export const CircleProgress: React.FC<CircleProgressProps> = ({
  value,
  max = 100,
  size = 120,
  variant = "default",
}) => {
  const progress = (value / max) * 100
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      className={`${styles.container} ${styles[`variant--${variant}`]}`}
      style={{ width: size, height: size }}
    >
      <svg className={styles.svg} viewBox='0 0 100 100'>
        <circle className={styles.track} cx='50' cy='50' r={radius} />
        <circle
          className={styles.indicator}
          cx='50'
          cy='50'
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className={styles.label}>{Math.round(progress)}%</div>
    </div>
  )
}
