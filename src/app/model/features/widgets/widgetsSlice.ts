import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Widget {
    id: string;
    type: string;
    component: React.ComponentType;
}

interface WidgetsState {
    value: Widget[];
}

const initialState: WidgetsState = {
    value: []
};

export const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action: PayloadAction<{ type: string; component: React.ComponentType }>) => {
            const newWidget: Widget = {
                id: Date.now().toString(),
                type: action.payload.type,
                component: action.payload.component
            };
            state.value.push(newWidget);
        },
        removeWidget: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(widget => widget.id !== action.payload);
        }
    }
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;