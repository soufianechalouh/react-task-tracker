import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([newTask, ...tasks])
    }

    // Delete task
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task) => task.id !== id))
    }
    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
        <Header title='yeo'/>
        <AddTask onAdd={addTask}/>

        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "No tasks to show"}
    </div>
  );
}

export default App;
