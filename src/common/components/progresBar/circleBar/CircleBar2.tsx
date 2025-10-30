// это сгенерил дипсик
import * as React from "react"
import { cn } from "@/lib/utils"

interface CircleProgressProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  className?: string
  children?: React.ReactNode
}

export function CircleProgress({
  value,
  max = 100,
  size = 100,
  strokeWidth = 8,
  className,
  children,
}: CircleProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.max(0, Math.min(value, max))
  const offset = circumference - (progress / max) * circumference

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className='transform -rotate-90'>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          className='text-gray-200 opacity-50'
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          strokeLinecap='round'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className='text-blue-600 transition-all duration-300'
        />
      </svg>
      {/* Content */}
      {children && (
        <div className='absolute inset-0 flex items-center justify-center'>
          {children}
        </div>
      )}
    </div>
  )
}
