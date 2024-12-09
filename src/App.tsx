import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { TaskProvider } from './TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <TaskProvider>
          <IonRouterOutlet>
            <Route path="/" component={Home} exact />
            <Route path="/add-task" component={AddTask} exact />
            {/* <Route path="/task-list" component={TaskList} exact /> */}
            <Route path="/task/:taskId" component={TaskDetails} exact />
            <Redirect to="/" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/">
              Home
            </IonTabButton>
            <IonTabButton tab="add-task" href="/add-task">
              Add Task
            </IonTabButton>
          </IonTabBar>
        </TaskProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
