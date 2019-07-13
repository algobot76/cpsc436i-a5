import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from './Message';
import { fetchMessages } from '../actions';

function MessageList() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages.items);
  const loading = useSelector(state => state.messages.loading);
  const error = useSelector(state => state.messages.error);
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <ul>
      {messages.map((message, idx) => (
        <Message key={idx} id={message._id} msg={message.msg} />
      ))}
    </ul>
  );
}

export default MessageList;
