import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };
  handleUpdateDone = (e) => {
    if(e.key === "Enter"){
      this.setState({editing: false})
    }
  }
    componentWillUnmount () {
      console.log("Clearning up");
    }
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { id, title, completed } = this.props.todo;
    let viewMode = {};
    let editMode = {};
    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li key={id} className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => {
              this.props.handleChangeProps(id);
            }}
          />
          <button
            onClick={() => {
              this.props.deleteTodoProps(id);
            }}
          >
            <FaTrash style={{color: "orangered", fontSize:"16px"}} />
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
          <input
            type="text"
            className={styles.textInput}
            style={editMode}
            value={title}
            onChange={e => {this.props.setUpdateProps(e.target.value, id)}}
            onKeyDown={this.handleUpdateDone}
          />
      </li>
    );
  }
}
export default TodoItem;
