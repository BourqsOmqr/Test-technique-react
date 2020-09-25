import './index.scss';
import React from 'react';

type Props = {
  title: string,
  content: string,
  onOpen: () => void,
  onClose: () => void,
  open: boolean
};

const TodoItem = ({ title, content, onOpen, onClose, open }: Props): JSX.Element => {
  return (
    <div className='todo-item'>
      <div className='todo-item--title' onClick={onOpen}>{title}</div>
      {open && (
        <div className='todo-item--content'>
          <p>{content}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
