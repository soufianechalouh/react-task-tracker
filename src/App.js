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
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
        <Header title='yeo'/>

        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "No tasks to show"}
    </div>
  );
}

export default App;
