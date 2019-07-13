import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../actions';

function AddMessage() {
  const dispatch = useDispatch();
  let inputRef = useRef(null);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(inputRef.current.value);
          if (!inputRef.current) {
            return;
          }
          dispatch(addMessage(inputRef.current.value));
          inputRef.current.value = '';
        }}
      >
        <input ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddMessage;
