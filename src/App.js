import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {id: 1, text: 'do chem hw', checked: true},
        {id: 2, text: 'trim nails', checked: false},
        {id: 3, text: 'prep tmrw lunch', checked: false},
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);

    return (
        <div>
          <TodoTemplate>
              <TodoInsert onInsert={onInsert}/>
              <TodoList todos={todos}/>
          </TodoTemplate>

        </div>
    );
};

export default App;