import React from 'react';
import style from './TodoApp.module.css';
import TodoList from './TodoList/TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import { connect } from 'react-redux';

const TodoApp = ({ completedTodos, todosLength }) => {
  return (
    <div className={style.layout}>
    <div className={style.container}>
      <h1 className={style.title}>Todo App</h1>
      <div className={style.todosInfo}>
        <p>All tasks: {todosLength}</p>
        <p>Completed tasks: {completedTodos}</p>
      </div>
      <TodoEditor />
      <TodoList />
    </div>
    </div>
  );
};
const mapStateToProps = state => ({
  todosLength: state.todos.items.length,
  completedTodos: state.todos.items.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  ),
});
export default connect(mapStateToProps)(TodoApp);
