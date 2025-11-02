import * as React from "react"
import * as Progress from "@radix-ui/react-progress"
import styles from "./ArcProgress.module.scss"

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
  arcLength = 270,
}) => {
  const progress = (value / max) * 100

  // Параметры дуги
  const radius = 45
  const strokeWidth = 8
  const normalizedRadius = radius - strokeWidth / 2
  const circumference = 2 * Math.PI * normalizedRadius

  // Вычисляем длину видимой дуги
  const visibleCircumference = (arcLength / 360) * circumference
  const progressLength = (progress / 100) * visibleCircumference
  const offset = visibleCircumference - progressLength

  // Функция для создания пути дуги
  const describeArc = (startAngle: number, endAngle: number): string => {
    const start = polarToCartesian(50, 50, normalizedRadius, startAngle)
    const end = polarToCartesian(50, 50, normalizedRadius, endAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

    return ["M", start.x, start.y, "A", normalizedRadius, normalizedRadius, 0, largeArcFlag, 1, end.x, end.y].join(" ")
  }

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    }
  }

  // Углы для дуги
  const centerAngle = 0 // Центральная точка (верх)
  const startAngle = centerAngle - arcLength / 2 // Симметрично влево от центра
  const endAngle = centerAngle + arcLength / 2 // Симметрично вправо от центра

  return (
    <Progress.Root
      className={`${styles.container} ${styles[`variant--${variant}`]}`}
      style={{ width: size, height: size }}
      value={value}
      max={max}
    >
      <svg className={styles.svg} viewBox="0 0 100 100">
        {/* Фоновая дорожка */}
        <path
          className={styles.track}
          d={describeArc(startAngle, endAngle)}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Индикатор прогресса */}
        <Progress.Indicator asChild>
          <path
            className={styles.indicator}
            d={describeArc(startAngle, endAngle)}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={visibleCircumference}
            strokeDashoffset={offset}
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
