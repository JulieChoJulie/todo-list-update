import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `todo ${i}`,
            checked: false,
        });
    }
    return array;
}

const App = () => {
    // const [todos, setTodos] = useState([
    //     {id: 1, text: 'do chem hw', checked: true},
    //     {id: 2, text: 'trim nails', checked: false},
    //     {id: 3, text: 'prep tmrw lunch', checked: false},
    // ]);
    const [todos, setTodos] = useState(createBulkTodos);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;
    }, []);

    const onRemove = useCallback(id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            )
        );
    }, []);

    return (
        <div>
          <TodoTemplate>
              <TodoInsert onInsert={onInsert}/>
              <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </TodoTemplate>

        </div>
    );
};

export default App;