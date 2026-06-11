import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        className="flex-1 border p-4 rounded-lg dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleSubmit}
        className="bg-black-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;