import AddToddoForm from "./components/AddToddoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodo from "./hooks/useTodo";

function App() {
  const {
    addTodo,
    deleteAllCompletedTodos,
    deteltItem,
    setTodoCompleted,
    todos,
  } = useTodo();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <TodoSummary
        todos={todos}
        deletedAllCompleted={deleteAllCompletedTodos}
      />
      <div className="mx-auto max-w-lg bg-slate-100 rounded-md p-5 space-y-6">
        <AddToddoForm onSubmit={addTodo} />
        <TodoList
          onCompletedChange={setTodoCompleted}
          todos={todos}
          onDelete={deteltItem}
        />
      </div>
    </main>
  );
}

export default App;
