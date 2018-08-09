import { actionCreators as counterActions } from 'store/module/counter';
import * as React from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { IstoreState } from 'store/module';
import { bindActionCreators } from 'redux';

interface Iprops {
    value: number;
    CounterActions: typeof counterActions;
}

class CounterContainer extends React.Component<Iprops> {
    onIncrement = () => {
        const { CounterActions } = this.props;
        CounterActions.increment();
    }
    onDecrement = () => {
        const { CounterActions } = this.props;
        CounterActions.decrement();
    }
    render() {
        const { onIncrement, onDecrement } = this;
        const { value } = this.props;
        return (
            <Counter
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                value={value}
            />
        );
    }
}

export default connect(
    ({ counter }: IstoreState) => ({
        value: counter.value,
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
    })
)(CounterContainer);