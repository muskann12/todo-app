'use client';
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Add items
  const addTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false }
    ]);

    setInputValue("");
  };

  // Toggle completed state
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-800 text-white">
      <header className="w-full mb-8 text-center py-5">
        <h1 className="text-5xl font-mono underline">TODO LIST BY MUSKAN</h1>
      </header>

      <div className="flex w-full max-w-md mb-4 py-12 text-gray-400">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow p-3 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="p-3 bg-pink-600 rounded-r-md hover:bg-pink-700 transition duration-300"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.length === 0 ? (
          <li className="p-4 text-center text-gray-500">No tasks added yet!</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className={`flex items-center justify-between p-4 border-b border-gray-700 transition duration-300 ${todo.completed ? "line-through text-gray-500" : "text-white"}`}>
              <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer hover:text-pink-400 transition duration-200">
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 text-red-500 hover:text-red-700 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>

      <footer className="mt-auto mb-4 text-center text-gray-400">
        <p>Made with ❤️ by Muskan</p>
      </footer>
    </div>
  );
};

export default TodoList;

