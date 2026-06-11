function Filter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {["all", "completed", "pending"].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded ${
            filter === type
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-600 dark:text-white"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;