"use client";
import { useState, useRef } from "react";
import { Todo } from "./Todo";

type Props = {
  todo: Todo;
  toggle: (todo: Todo) => void;
  update: (todo: Todo) => void;
  remove: (todo: Todo) => void;
};

export const TodoItem = ({ todo, toggle, update, remove }: Props) => {
  const [isEditing, setIsEditing] = useState("");
  const [draft, setdraft] = useState(todo.title);
  const focusRef = useRef<HTMLInputElement>(null);

  const save = () => {
    update({ ...todo, title: draft });
  };

  return (
    <div
      data-testid="todo-item"
      className={
        "todo-item border-b border-solid border-slate-300 relative flex " +
        (isEditing == todo.id && " editing ") +
        (todo.completed && " completed ")
      }
    >
      <div className="view w-full">
        <input
          aria-label="Toggle Todo"
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo)}
        />
        {!isEditing && (
          <label
            data-testid="todo-title"
            className="flex justify-between w-full"
            onDoubleClick={() => {
              setIsEditing(todo.id);
              setTimeout(() => {
                focusRef.current?.focus();
              }, 100);
            }}
          >
            <span>{todo.title}</span>

            <span className="text-sm">
              {new Date(todo.dateChanged!).toLocaleTimeString()}
            </span>
          </label>
        )}
        <button
          aria-label="Delete"
          className="destroy"
          onClick={() => remove(todo)}
        ></button>
      </div>
      <input
        ref={focusRef}
        aria-label="Edit"
        className="edit"
        value={draft}
        onChange={(e) => setdraft(e.currentTarget.value)}
        onBlur={() => {
          save();
          setIsEditing("");
        }}
        onKeyUp={(e) => {
          if (e.key == "Enter") {
            save();
            setIsEditing("");
          }
        }}
      />
    </div>
  );
};
