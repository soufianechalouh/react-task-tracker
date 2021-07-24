import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'tomorrow',
        reminder: true
    },
    {
        id: 2,
        text: 'Gym',
        day: 'today',
        reminder: false
    },
    {
        id: 3,
        text: 'Seb appointment',
        day: 'the day after',
        reminder: true
    }
])

  return (
    <div className="container">
        <Header title='yeo'/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
