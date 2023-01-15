import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    const {todos, handleChangeProps, deleteTodoProps} = this.props
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
