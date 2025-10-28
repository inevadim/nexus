"use client";

import styles from "./Desk.module.scss";
import { Widget } from "@/app/widgets/desk/ui";
import { AddWidget } from "@/app/shared/ui";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";
import { changeVisible } from "@/app/store/features/modalSlice";
import { Modal } from "@/app/widgets/modal/ui/Modal";
import { addWidget, removeWidget } from "@/app/store/features/widgetsSlice";

export const Desk = () => {
  const modal = useSelector((state: RootState) => state.modal.value);
  const widgets = useSelector((state: RootState) => state.widgets.value);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(changeVisible());
  };

  const handleAddWidgetConfirmed = (
    type: string,
    component: React.ComponentType
  ) => {
    dispatch(addWidget({ type, component }));
  };

  const handleRemoveWidget = (id: string) => {
    dispatch(removeWidget(id));
  };

  return (
    <div className={styles.wrapDesk}>
      <div className={styles.desk}>
        {widgets.map((widget) => (
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
  );
};
