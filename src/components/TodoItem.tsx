import * as React from 'react';

interface Iprops {
    text: string;
    done: boolean;
    onRemove(): void;
    onToggle(): void;
}

const TodoItem: React.SFC<Iprops> = ({text, done, onRemove, onToggle }) => (
    <li style={{cursor: 'pointer'}}>
        <b 
            onClick={onToggle}
            style={{textDecoration: done ? 'line-through' : 'none'}}
        >
          {text}
        </b>
        <span style={{marginLeft: '0.5rem'}} onClick={onRemove}> [지우기] </span>
    </li>
);

export default TodoItem;