import { useState } from "react";

interface addTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddToddoForm({ onSubmit }: addTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="rounded-s-md p-2 grow border border-gray-400"
        type="text"
        value={input}
        placeholder="What needs to be done?"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        className="bg-slate-900 text-white rounded-e-md hover:bg-slate-800 w-16"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
