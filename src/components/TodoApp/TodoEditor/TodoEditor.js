import React, { Component } from 'react';
import style from './TodoEditor.module.css';
import IconButton from '../../../templates/IconButton/IconButton';
import { connect } from 'react-redux';
import actions from '../../../redux/todoApp/todo-actions';

class TodoEditor extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handelChange = event => {
    this.setState({
      message: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <div>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.message}
            onChange={this.handelChange}
            placeholder="Введіть текст майбутньої таски..."
          ></textarea>
          <IconButton
            type="submit"
            // onClick={this.addTask}
            disabled={!this.state.message}
            title="Введіть текст таски"
          >
            Add Task
          </IconButton>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  message: state.todos.message,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: message => dispatch(actions.addTodo(message)),
  addMessage: message => dispatch(actions.addMessage(message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoEditor);
