const TodoCard = () => {
  return (
    <tr className="bg-white border-b">
      <td className="p-4">
        <input type="checkbox" className="mr-2" />
      </td>
      <td className="p-4">
        <p className="text-lg font-semibold">Todo Title</p>
      </td>
      <td className="p-4">
        <p className="text-sm text-gray-500">Time</p>
      </td>
      <td className="p-4">
        <p className="text-sm text-gray-500">Short Description</p>
      </td>
      <td className="p-4">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TodoCard;
