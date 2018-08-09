import * as React from 'react';
import Button from '@material-ui/core/Button';

interface Iprops {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
}

const Counter: React.SFC<Iprops> = ({value, onIncrement, onDecrement}) => (
    <div>
        <h2>카운터</h2>
        <h3>{value}</h3>
            <div>
                <Button variant="contained" color="primary" onClick={onIncrement}>+</Button>
                <Button variant="contained" color="secondary" onClick={onDecrement}>-</Button>
            </div>
    </div>
);

export default Counter;