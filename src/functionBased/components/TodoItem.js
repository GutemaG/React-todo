import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('Clearning up');
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const { editing } = this.state;
    const {
      // eslint-disable-next-line react/prop-types
      todo, handleChangeProps, deleteTodoProps, setUpdateProps,
    } = this.props;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    // eslint-disable-next-line react/prop-types
    const { id, title, completed } = todo;
    const viewMode = {};
    const editMode = {};
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li key={id} className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => {
              handleChangeProps(id);
            }}
          />
          <button
            type="button"
            onClick={() => {
              deleteTodoProps(id);
            }}
          >
            <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => { setUpdateProps(e.target.value, id); }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}
export default TodoItem;
