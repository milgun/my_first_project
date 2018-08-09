import * as React from 'react';
import TodoItem from './TodoItem';
import { List } from 'immutable';
import { TodoItemData } from 'store/module/todos';

interface Iprops {
    input: string;
    todoItems: List<TodoItemData>;
    onCreate(): void;
    onRemove(id: number): void;
    onToggle(id: number): void;
    onChange(e: any): void;
}

const TodoList : React.SFC<Iprops> = ({
    input, todoItems, onCreate, onRemove, onToggle, onChange,
}) => {
    const todoItem = todoItems.map(
        todos => todos ? (
            <TodoItem
                key={todos.id}
                text={todos.text}
                done={todos.done}
                // tslint:disable-next-line:jsx-no-lambda
                onRemove={()=>onRemove(todos.id)}
                // tslint:disable-next-line:jsx-no-lambda
                onToggle={()=>onToggle(todos.id)}
            />
        )
        : null
    );
    return (
        <div>
            <h1>할 일</h1>
                <form 
                    onSubmit={
                        // tslint:disable-next-line:jsx-no-lambda
                        (e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            onCreate();
                        }
                    }
                >
                    <input onChange={onChange} value={input}/>
                    <button type="submit">추가하기</button>
                </form>
                <ul>
                    {todoItem}
                </ul>
        </div>
    );
};

export default TodoList;