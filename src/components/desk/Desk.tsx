import styles from "./Desk.module.scss"
import { Widget } from "./widget/Widget"
import { AddWidget } from "./addWidget/AddWidget";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/model/store";
import { changeVisible } from "../../app/model/features/modal/modalSlice";
import { Modal } from "../modal/Modal";
import { addWidget, removeWidget } from "../../app/model/features/widgets/widgetsSlice";




export const Desk = () => {
    const modal = useSelector((state: RootState) => state.modal.value)
    const widgets = useSelector((state: RootState) => state.widgets.value)
    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(changeVisible()) 
    }

    const handleAddWidgetConfirmed = (type: string, component: React.ComponentType) => {
        dispatch(addWidget({ type, component }))
    }

    const handleRemoveWidget = (id: string) => { 
        dispatch(removeWidget(id))
    }

    return(
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