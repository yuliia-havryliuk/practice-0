import actions from './todo-types';
import { v4 as uuidv4 } from 'uuid';

const addTodo = text => ({
  type: actions.ADD,
  payload: {
    id: uuidv4(),
    text,
    completed: false,
    edit: false,
  },
});
const deleteTodo = todoId => ({
  type: actions.DELETE,
  payload: todoId,
});
const toggleCompleted = todoId => ({
  type: actions.TOGGLE_COMPLETED,
  payload: todoId,
});
const onChangeTodo = (message, todoId) => ({
  type: actions.CHANGE_TODO,
  payload: message,
  todoId: todoId,
});
export default {
  addTodo,
  deleteTodo,
  toggleCompleted,
  onChangeTodo,
};
