import * as React from "react"
import * as Switch from "@radix-ui/react-switch"
import styles from "./Switch.module.scss"

interface ArcSwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  size?: "small" | "medium" | "large"
  variant?: "default" | "success" | "warning" | "danger"
}

export const ArcSwitch: React.FC<ArcSwitchProps> = ({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  size = "medium",
  variant = "default",
}) => {
  return (
    <Switch.Root
      className={`
        ${styles.root} 
        ${styles[`size--${size}`]} 
        ${styles[`variant--${variant}`]}
        ${disabled ? styles.disabled : ""}
      `}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
    >
      <Switch.Thumb className={styles.thumb} />
    </Switch.Root>
  )
}
