import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const actionCreators = {
    increment: createAction(INCREMENT),
    decrement: createAction(DECREMENT),
};

export interface IcounterState {
    value: number;
}

const initialState: IcounterState = {
    value: 0,
};

export default handleActions<IcounterState>(
    {
        [INCREMENT]: (state) => ({ value: state.value + 1}),
        [DECREMENT]: (state) => ({ value: state.value - 1}),
    },
    initialState
);