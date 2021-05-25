import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actions from './redux/todoApp/todo-types';

const itemsReducer = (state = [], { type, payload, todoId }) => {
  switch (type) {
    case actions.ADD:
      return [payload, ...state];

    case actions.DELETE:
      return state.filter(todo => todo.id !== payload);

    case actions.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    case actions.CHANGE_TODO:
      return state.map(todo =>
        todo.id === todoId ? { ...todo, text: payload } : todo,
      );

    default:
      return state;
  }
};

const todosReducer = combineReducers({
  items: itemsReducer,
});
const rootReducer = combineReducers({
  todos: todosReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;
