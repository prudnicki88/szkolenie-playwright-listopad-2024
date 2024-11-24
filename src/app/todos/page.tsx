"use client";
import "./styles.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { Clock } from "./Clock";
import { Todo } from "./Todo";
import { TodoItem } from "./TodoItem";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("/todos.json")
      .then((r) => r.json())
      .then((data) => setTodos(data));
  },[]);

  const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const editorRef = useRef<HTMLInputElement>(null);
  const addTodo = (title: string) => {
    const todo = {
      id: crypto.randomUUID(),
      completed: false,
      title,
      dateChanged: new Date().toJSON(),
    };
    setTodos([todo, ...todos]);
    editorRef.current!.value = "";
  };

  const toggleTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) =>
        t.id !== todo.id
          ? t
          : {
              ...todo,
              completed: !t.completed,
            }
      )
    );
  };
  const saveTodo = (todo: Todo) => {
    todo.dateChanged = new Date().toJSON();
    setTodos(todos.map((t) => (t.id !== todo.id ? t : todo)));
  };

  const todosLeft = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );
  const completedCount = useMemo(
    () => todos.filter((t) => t.completed).length,
    [todos]
  );

  useEffect(() => {
    setFilteredTodos(
      todos.filter((todo) => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
      })
    );
  }, [todos, filter]);

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const removeTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="container my-5 gap-5">
      <Clock></Clock>

      <h1 className="text-5xl leading-loose">Todos</h1>

      <div className="max-w-[500px] mx-auto grid gap-5">
        <header className="header">
          <input
            className="new-todo dark:!text-white light:!text-black"
            placeholder="What needs to be done?"
            ref={editorRef}
            onKeyUp={(e) => e.key == "Enter" && addTodo(e.currentTarget.value)}
          />
        </header>

        <div className="todo-list divide-y divide-solid divide-slate-500">
          {filteredTodos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggle={toggleTodo}
              update={saveTodo}
              remove={removeTodo}
            />
          ))}
          {!filteredTodos.length && (
            <p className="text-center p-5">No todos to show</p>
          )}
        </div>
        <footer className="footer flex justify-between">
          <span data-testid="todo-count" className="todo-count">
            <strong>{todosLeft || "no more"}</strong> items left
          </span>
          <ul className="filters flex gap-2">
            <li>
              <a
                href="#/"
                className={filter == "All" ? "selected" : ""}
                onClick={() => setFilter("All")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                className={filter == "Active" ? "selected" : ""}
                onClick={() => setFilter("Active")}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                className={filter == "Completed" ? "selected" : ""}
                onClick={() => setFilter("Completed")}
              >
                Completed
              </a>
            </li>
          </ul>
          {completedCount > 0 && (
            <button className="clear-completed" onClick={clearCompleted}>
              Clear completed
            </button>
          )}
        </footer>

        <a href="/"> {'<<'} Homepage </a>
      </div>
    </div>
  );
}
