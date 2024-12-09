import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { useTaskContext, Task, TaskAction } from '../TaskContext';

const AddTask: React.FC = () => {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string>('');

  const handleAddTask = () => {

    if (!title || !description || !category) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
      type: category as 'Hobbies' | 'Casa' | 'Trabajo' | 'Familia/Amigos'
    };

    const action: TaskAction = { type: 'ADD_TASK', payload: newTask };
    dispatch(action);

    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Título</IonLabel>
          <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Descripción</IonLabel>
          <IonInput value={description} onIonChange={(e) => setDescription(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel>Categoría</IonLabel>
          <IonSelect value={category} placeholder="Selecciona una categoría" onIonChange={(e) => setCategory(e.detail.value)}>
            <IonSelectOption value="Hobbies">Trabajo</IonSelectOption>
            <IonSelectOption value="Casa">Casa</IonSelectOption>
            <IonSelectOption value="Trabajo">Negocios</IonSelectOption>
            <IonSelectOption value="Familia/Amigos">Negocios</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={handleAddTask}>Agregar Tarea</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddTask;
