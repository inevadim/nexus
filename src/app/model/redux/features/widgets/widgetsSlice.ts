import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface WidgetItem {
    id: string;
    type: string;
}

export interface WidgetState {
  value: WidgetItem[]
}

const initialState: WidgetState = {
  value: [],
}

export const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<string>) => {
        if (state.value.length < 8) {
            state.value.push({ 
                id: crypto.randomUUID(),
                type: action.payload 
            })
        }
    },
    removeWidget: (state, action: PayloadAction<string>) => {
        state.value = state.value.filter(widget => widget.id !== action.payload)
    },
    clearWidgets: (state) => {
        state.value = []
    },
  },
})

export const { addWidget, removeWidget, clearWidgets } = widgetSlice.actions
export default widgetSlice.reducer