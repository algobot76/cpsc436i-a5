import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAllMessages } from '../actions';

function ClearAll() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(clearAllMessages());
        }}
        type="button"
      >
        Clear All
      </button>
    </div>
  );
}

export default ClearAll;
