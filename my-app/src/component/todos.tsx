import React from 'react';
import Todo from '../models/Todo';

const TodoItem: React.FC<{item:string}> =(props)=>{

    return(
        <div>
            <p >{props.item}</p>
        </div>
    )

}

export default TodoItem;