import React, { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';
const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("")
    } else {
      alert("Please Write item");
    }
  };
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo...."
        value={title}
        onChange={onChange}
        name="title"
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};
export default InputTodo;
