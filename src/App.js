import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {id: 1, text: 'do chem hw', checked: true},
        {id: 2, text: 'trim nails', checked: false},
        {id: 3, text: 'prep tmrw lunch', checked: false},
    ]);

    return (
        <div>
          <TodoTemplate>
              <TodoInsert />
              <TodoList todos={todos}/>
          </TodoTemplate>

        </div>
    );
};

export default App;