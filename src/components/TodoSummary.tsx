import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deletedAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deletedAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2 text-sm">
      <p>
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button className="text-red-500 hover:underline font-medium" onClick={deletedAllCompleted}>Delete all completed</button>
      )}
    </div>
  );
}
