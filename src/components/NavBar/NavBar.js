import {
  Link,
} from "react-router-dom";
import { withRouter } from "react-router";
import s from './NavBar.module.css'

function NavBar({ history }) {
  return (
    <nav className={s.container}>
      <Link to="/" className={s.navLink}>NotProtectedUserPage</Link>
      <Link to="/protected" className={s.navLink}>ProtectedUserPage</Link>
      <button onClick={() => {
        localStorage.setItem("isAuthorized", true);
        history.push("/protected");
      }} className={s.navLink}>LogIn</button>
      <button onClick={() => {
        localStorage.setItem("isAuthorized", false);
        history.push("/");
      }} className={s.navLink}>LogOut</button>
    </nav>
  )
}

export default withRouter(NavBar);
