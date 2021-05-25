import { connect } from 'react-redux';
import style from './NotProtectedPage.module.css';
import { MdDeleteForever } from 'react-icons/md/';
import React from 'react';


function NotProtectedUserPage({todos, todosLength}) {
  return (
    <div>
      <div className={style.title}>
      {todosLength ?   <h3>All tasks: {todosLength}.</h3> : <h3 className={style.emptyTodo}>You don't have any tasks yet :(</h3>}
      </div>
      <div>
        <ul className={style.container}>
          {todos.map(({ id, text}) => (
            <li key={id} className={style.item}>
                <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  todos: state.todos.items,
  todosLength: state.todos.items.length,
});
export default connect(mapStateToProps)(NotProtectedUserPage);

// import { connect } from 'react-redux';
//

// import { getUser } from '../redux/selectors';
//
// function NotProtectedUserPage({ user }) {
//   console.log('user', user);
//   return (
//     <div>
//       <div>
//         <span>Name:</span>
//         <span>{user.name}</span>
//       </div>
//       <div>
//         <span>Surname:</span>
//         <span>{user.surname}</span>
//       </div>
//     </div>
//   );
// }
//
// const mapStateToProps = state => ({
//   user: getUser(state),
// });
//
// export default connect(mapStateToProps, null)(NotProtectedUserPage);
