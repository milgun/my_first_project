import todos,{ TodoState } from './todos';
import counter, { IcounterState } from './counter';
import { combineReducers } from 'redux';

export default combineReducers({
    counter,
    todos,
});

export interface IstoreState {
    counter: IcounterState;
    todos: TodoState;
}