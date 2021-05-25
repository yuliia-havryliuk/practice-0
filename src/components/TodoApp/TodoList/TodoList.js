import React from 'react';
import style from './TodoList.module.css';
import { MdDeleteForever } from 'react-icons/md/';
import { AiFillCheckCircle, AiFillEdit } from 'react-icons/ai';
import { connect } from 'react-redux';
import actions from '../../../redux/todoApp/todo-actions';

const TodoList = ({
  todos,
  onDeleteTodo,
  toggleCompleted,
  onChangeTodo,
}) => {
  return (
    <div>
      <ul className={style.container}>
        {todos.map(({ id, text, completed, edit }) => (
          <li key={id} className={completed ? style.completedItem : style.item}>
            <button type="button" onClick={() => toggleCompleted(id)}>
              <AiFillCheckCircle
                className={
                  completed ? style.btnCompleted : style.btnNotCompleted
                }
              />
            </button>
            {edit ? (
              <textarea
                value={text}
                placeholder="Введіть текст майбутньої таски..."
                onChange={(event, id) => onChangeTodo(event.target.value, id)}
              >
                {' '}
              </textarea>
            ) : (
              <p>{text}</p>
            )}
            <button
              type="button"
              className={style.btn}
              onClick={() => onDeleteTodo(id)}
            >
              <MdDeleteForever className={style.icon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  todos: state.todos.items,
});
const mapDispatchToProps = dispatch => ({
  onDeleteTodo: todoId => {
    dispatch(actions.deleteTodo(todoId));
  },
  toggleCompleted: todoId => {
    dispatch(actions.toggleCompleted(todoId));
  },
  onChangeTodo: ({ message, todoId }) => {
    dispatch(actions.onChangeTodo(message, todoId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
