import React, { createContext, useContext, useReducer } from 'react';

// Definir la forma de una tarea
export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    type: 'Hobbies' | 'Casa' | 'Trabajo' | 'Familia/Amigos';
}

// Definir el tipo del contexto y sus acciones
interface TaskContextProps {
    tasks: Task[];
    dispatch: React.Dispatch<TaskAction>;
}

// Definir las acciones disponibles para el reducer
export type TaskAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'COMPLETE_TASK'; payload: number }
    | { type: 'DELETE_TASK'; payload: number };

// Reducer para manejar las acciones relacionadas con las tareas
const taskReducer = (state: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD_TASK':
            // localStorage.setItem('tasks', JSON.stringify(state))
            return [...state, action.payload];
        case 'COMPLETE_TASK':
            // localStorage.setItem('tasks', JSON.stringify(state))
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: true } : task
            );
        case 'DELETE_TASK':
            // localStorage.setItem('tasks', JSON.stringify(state))
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};

// Crear el contexto de React
const TaskContext = createContext<TaskContextProps | undefined>(undefined);

// Hook para acceder al contexto
export const useTaskContext = (): TaskContextProps => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

// Proveedor del contexto para envolver la aplicación
export const TaskProvider: React.FC = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
