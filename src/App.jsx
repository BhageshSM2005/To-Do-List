import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  

  // return (
  //   <div className={darkMode ? "dark" : ""}>
  //     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition duration-500">
  //       <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-[450px]">

  //         <div className="flex justify-between items-center mb-4">
  //           <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
  //             📝 Smart To-Do
  //           </h1>
  //           <button
  //             onClick={() => setDarkMode(!darkMode)}
  //             className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded"
  //           >
  //             {darkMode ? "☀" : "🌙"}
  //           </button>
  //         </div>

  //         <TaskInput addTask={addTask} />
  //         <Filter filter={filter} setFilter={setFilter} />
  //         <TaskList
  //           tasks={filteredTasks}
  //           deleteTask={deleteTask}
  //           toggleComplete={toggleComplete}
  //           editTask={editTask}
  //         />

  //         <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
  //           Total Tasks: {tasks.length}
  //         </p>

  //       </div>
  //     </div>
  //   </div>
  // );

  
  return (
    <div
      className={`min-h-screen transition-all duration-500 ${darkMode
          ? "bg-gradient-to-br from-slate-900 via-gray-900 to-black"
          : "bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100"
        }`}
    >
      <div className="flex justify-center items-center min-h-screen p-5">

        <div
          className="w-full max-w-2xl
        backdrop-blur-xl
        bg-white/70
        dark:bg-gray-800/70
        border border-white/20
        shadow-2xl
        rounded-3xl
        p-8"
        >

          {/* Header */}

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-extrabold text-blue-600 dark:text-white">
                Smart To-Do
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Stay organized. Stay productive.
              </p>

            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="h-12 w-12 rounded-full
            bg-blue-500
            hover:bg-blue-600
            text-white
            shadow-lg
            transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-4 mb-6">

            <div className="rounded-xl bg-blue-500 text-white p-4 text-center">

              <p className="text-sm">Total</p>

              <h2 className="text-2xl font-bold">
                {tasks.length}
              </h2>

            </div>

            <div className="rounded-xl bg-green-500 text-white p-4 text-center">

              <p className="text-sm">Completed</p>

              <h2 className="text-2xl font-bold">
                {tasks.filter(t => t.completed).length}
              </h2>

            </div>

            <div className="rounded-xl bg-orange-500 text-white p-4 text-center">

              <p className="text-sm">Pending</p>

              <h2 className="text-2xl font-bold">
                {tasks.filter(t => !t.completed).length}
              </h2>

            </div>

          </div>

          {/* Components */}

          <TaskInput addTask={addTask} />

          <div className="mt-5">
            <Filter
              filter={filter}
              setFilter={setFilter}
            />
          </div>

          <div className="mt-6">
            <TaskList
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              editTask={editTask}
            />
          </div>

          <div className="mt-8 border-t pt-4 flex justify-between text-gray-500 dark:text-gray-300">

            <span>
              Showing {filteredTasks.length} task(s)
            </span>

            <span>
              {new Date().toLocaleDateString()}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
