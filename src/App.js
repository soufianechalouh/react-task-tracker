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
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
        <Header title='yeo'/>
        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
