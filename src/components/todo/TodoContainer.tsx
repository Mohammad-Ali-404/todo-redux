import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex justify-between mb-4">
        <AddTodoModal />
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Filter
        </button>
      </div>
      <div className="bg-red-300 w-full h-auto min-h-[500px] rounded-xl p-4 sm:p-6 md:p-8">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">Select</th>
              <th className="p-4 text-left">Todo Title</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
          </tbody>

          {/* <div>
        <div className="">
          <p>There Is no task pending</p>
          {""}
        </div>
      </div> */}
        </table>
      </div>
    </div>
  );
};

export default TodoContainer;
