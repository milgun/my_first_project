import * as React from 'react';
import { List } from 'immutable';
import { TodoItemData, actionCreators as todosActions } from 'store/module/todos';
import { IstoreState } from 'store/module';
import { bindActionCreators } from 'redux';
import TodoList from 'components/TodoList';
import { connect } from 'react-redux';

interface Iprops {
    todoItems: List<TodoItemData>;
    TodosActions: typeof todosActions;
    input: string;
}

const mapStateToProps = (state: IstoreState) => ({
    input: state.todos.input,
    todoItems: state.todos.todoItems,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     create: () => dispatch(todosActions.create('hi')),
//     remove: () => dispatch(todosActions.remove(1)),
//     toggle: () => dispatch(todosActions.toggle(1)),
//     change: () => dispatch(todosActions.change('hi')),
// });


class TodoListContainer extends React.Component<Iprops> {
    onCreate = () => {
        const { input, TodosActions } = this.props;
        TodosActions.create(input);
    }
    onRemove = (id: number) => {
        const { TodosActions } = this.props;
        TodosActions.remove(id);
    }
    onToggle = (id: number) => {
        const { TodosActions } = this.props;
        TodosActions.toggle(id);
    }
    onChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      const { TodosActions } = this.props;
      TodosActions.change(value);
    }
    render() {
      const { input, todoItems } = this.props;
      const { onCreate, onRemove, onToggle, onChange } = this;
  
      return (
        <TodoList
          input={input}
          todoItems={todoItems}
          onCreate={onCreate}
          onRemove={onRemove}
          onToggle={onToggle}
          onChange={onChange}
        />
      );
    }
  }

  export default connect(mapStateToProps, 
    (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
  })
)(TodoListContainer);