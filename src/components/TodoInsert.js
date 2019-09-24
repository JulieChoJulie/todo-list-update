import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    var [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            // prevent refreshing from submit event
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="Please enter your todo"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );

};

export default TodoInsert;