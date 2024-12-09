import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useTaskContext, Task } from '../TaskContext';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';

const Home: React.FC = () => {
  const { tasks } = useTaskContext();

  const completedTasks = tasks.filter((task: Task) => task.completed);
  const pendingTasks = tasks.filter((task: Task) => !task.completed);

  // console.log(tasks, 'tasks')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Pendientes ({pendingTasks.length})</IonLabel>
          </IonItem>
          {/* {pendingTasks.map((task: Task) => ( */}
          <TaskList tasks={pendingTasks} />
          {/* ))} */}
          <IonItem>
            <IonLabel>Completadas ({completedTasks.length})</IonLabel>
          </IonItem>
          <TaskList tasks={completedTasks} />
          {/* {completedTasks.map((task: Task) => (
            <Link to={`/task/${task.id}`}>

              <IonItem key={task.id}>
                <IonLabel>{task.title}</IonLabel>
              </IonItem>
            </Link>
          ))} */}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary" routerLink="/add-task">
            +
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
