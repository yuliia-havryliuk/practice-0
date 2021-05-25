import { connect } from 'react-redux';
import TodoApp from '../TodoApp/TodoApp';
import React from 'react';

function ProtectedUserPage() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

export default ProtectedUserPage

// import { useState } from 'react';
// import { connect } from 'react-redux';
//
// import { getUser } from '../redux/selectors';
// import { setUser } from '../redux/actions';
//
// function ProtectedUserPage({ user, setUser: setUserData }) {
//   const [name, setName] = useState(user.name);
//   const [surname, setSurname] = useState(user.surname);
//
//   const onChangeInputName = e => {
//     setName(e.target.value);
//   };
//
//   const onChangeInputSurname = e => {
//     setSurname(e.target.value);
//   };
//
//   return (
//     <div>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" onChange={onChangeInputName} />
//       </div>
//       <div>
//         <label htmlFor="surname">Surname:</label>
//         <input type="text" id="surname" onChange={onChangeInputSurname} />
//       </div>
//       <div>
//         <span>Name:</span>
//         <span>{user.name}</span>
//       </div>
//       <div>
//         <span>Surname:</span>
//         <span>{user.surname}</span>
//       </div>
//       <button
//         onClick={() => {
//           setUserData({ name, surname });
//         }}
//       >
//         Set User Data
//       </button>
//     </div>
//   );
// }
//
// const mapStateToProps = state => ({
//   user: getUser(state),
// });
//
// const mapDispatchToProps = { setUser };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProtectedUserPage);
