import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { useTaskContext, Task, TaskAction } from '../TaskContext';
import { Link } from 'react-router-dom';

const TaskList: React.FC = ({tasks}) => {
    console.log(tasks, 'tasksssss')
    const { dispatch, tasks: taskss } = useTaskContext();
    console.log(taskss, 'task context')

    const handleCompleteTask = (taskId: number) => {
        const action: TaskAction = { type: 'COMPLETE_TASK', payload: taskId };
        dispatch(action);
    };

    const handleDeleteTask = (taskId: number) => {
        const action: TaskAction = { type: 'DELETE_TASK', payload: taskId };
        dispatch(action);
    };

    return (
        // <IonPage>
        //     <IonHeader>
        //         <IonToolbar>
        //             <IonTitle>Lista de Tareas</IonTitle>
        //         </IonToolbar>
        //     </IonHeader>
        //     <IonContent>
                <IonList>
                    {tasks.map((task: Task) => (
                        <IonItem key={task.id}>
                            <IonCheckbox slot="start" checked={task.completed} onIonChange={() => handleCompleteTask(task.id)} />
                            <Link to={`/task/${task.id}`}>
                                <IonLabel>{task.title}</IonLabel>
                            </Link>
                            <IonButton fill="clear" onClick={() => handleDeleteTask(task.id)}>
                                Borrar
                            </IonButton>
                        </IonItem>
                    ))}
                </IonList>
            // </IonContent>
        // </IonPage>
    );
};

export default TaskList;
