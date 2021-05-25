import s from './NotAuthorized.module.css'
export default function NotAuthorized() {
  return <div className={s.container}>
    <h3>You will be able to use the ToDo App only after authorization.</h3>
  </div>;
}
