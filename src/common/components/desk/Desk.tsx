import styles from "./Desk.module.scss"
import { Widget } from "@/common/components"
import { AddWidget } from "@/common/components"
import type { RootState } from "@/app/model/store"
import { changeVisible } from "@/app/model/features/modal/modalSlice"
import { Modal } from "@/common/components"
import { addWidget, removeWidget } from "@/app/model/features/widgets/widgetsSlice"
import { useAppDispatch, useAppSelector } from "@/common/hooks"

export const Desk = () => {
  const modal = useAppSelector((state: RootState) => state.modal.value)
  const widgets = useAppSelector((state: RootState) => state.widgets.value)
  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    dispatch(changeVisible())
  }

  const handleAddWidgetConfirmed = (type: string, component: React.ComponentType) => {
    dispatch(addWidget({ type, component }))
  }

  const handleRemoveWidget = (id: string) => {
    dispatch(removeWidget(id))
  }

  return (
    <div className={styles.wrapDesk}>
      <div className={styles.desk}>
        {widgets.map(widget => (
          <Widget
            key={widget.id}
            type={widget.type}
            component={widget.component}
            onRemove={() => handleRemoveWidget(widget.id)}
          />
        ))}

        {widgets.length >= 0 && widgets.length < 8 && (
          <div onClick={handleOpenModal}>
            <AddWidget />
          </div>
        )}
      </div>
      {modal && <Modal onAddWidget={handleAddWidgetConfirmed} />}
    </div>
  )
}
