import { useState } from "react";

function TaskItem({ task, deleteTask, toggleComplete, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow transition hover:scale-105 duration-200">

      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        {editing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 rounded dark:bg-gray-600 dark:text-white"
          />
        ) : (
          <span className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.text}
          </span>
        )}
      </div>

      <div className="flex gap-4">
        {editing ? (
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-2 rounded text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-400 px-2 rounded text-sm"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;