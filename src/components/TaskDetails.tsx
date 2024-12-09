import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useTaskContext, Task } from '../TaskContext';
import { RouteComponentProps } from 'react-router-dom';

interface TaskDetailsProps extends RouteComponentProps<{ taskId: string }> {}

const TaskDetails: React.FC<TaskDetailsProps> = ({ match }) => {

    console.log({match})
  const { tasks } = useTaskContext();

  const taskId = parseInt(match.params.taskId, 10);
  const task: Task | undefined = tasks.find((task: Task) => task.id === taskId);

  if (!task) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Detalles de Tarea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>No se encontró la tarea</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles de Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Título</IonLabel>
            <IonLabel>{task.title}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Descripción</IonLabel>
            <IonLabel>{task.description}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Completada</IonLabel>
            <IonLabel>{task.completed ? 'Sí' : 'No'}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TaskDetails;
