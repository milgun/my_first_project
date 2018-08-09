import { Action, createAction, handleActions } from 'redux-actions';
import { List, Record } from 'immutable';

const CREATE = 'todos/CREATE';
const CHANGE = 'todos/CHANGE';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const actionCreators = {
    create: createAction<string>(CREATE),
    change: createAction<string>(CHANGE),
    toggle: createAction<number>(TOGGLE),
    remove: createAction<number>(REMOVE),
};

const todoItemRecord = Record({
    id: 0,
    text: '',
    done: false,
});

interface ItodoItemDataParams {
    id?: number;
    text?: string;
    done?: boolean;
}

export class TodoItemData extends todoItemRecord {
    static autoId = 0;
    id: number;
    text: string;
    done: boolean;
    constructor(props: ItodoItemDataParams){
        const id = TodoItemData.autoId;
        super({
            ...props,
            id,
        });
        TodoItemData.autoId = id + 1;
    }
}

const TodoStateRecord = Record({
    todoItems: List(),
    input: '',
});

// tslint:disable-next-line:max-classes-per-file
export class TodoState extends TodoStateRecord{
    todoItems: List<TodoItemData>;
    input: string;
}

const InitialState = new TodoState();

export default handleActions<TodoState, any>(
    {
        [CREATE]: (state, action: Action<string>) => {
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return <TodoState> state.withMutations(
                s => {
                  s.set('input', '')
                  .update('todoItems', (todoItems: List<TodoItemData>) => todoItems.push(
                    new TodoItemData({ text: action.payload })
                  ));
                }
              );
        },
        [CHANGE]: (state, action: Action<string>) => {
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return <TodoState> state.set('input', action.payload);
        },
        [REMOVE]: (state, action: Action<number>) => {
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return <TodoState> state.update('todoItems',
            (todoItems: List<TodoItemData>) => todoItems.filter(
                t => t ? t.id !== action.payload : false 
                )
            );
        },
        [TOGGLE]: (state, action: Action<number>) => {
            const index = state.todoItems.findIndex(t => t ? t.id === action.payload : false);
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return <TodoState> state.updateIn(['todoItems', index, 'done'], done => !done);
        },
    },
    InitialState
);