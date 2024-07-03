import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center font-semibold py-5">My Todo</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
