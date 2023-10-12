import React, { useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup"
import { useSelector, useDispatch } from "react-redux";
import { deletes, edit, save } from '../Reducer/TodoSlice';

const ListToDo = () => {
  const newTask = useSelector((state) => state.todo.todoo);
  console.log(newTask);
  const dispatch = useDispatch();
  const editRef = useRef(null);

  const saveItem = (id) => { 
    const editText = {
      id: id,
      text: editRef.current.value
    };
    dispatch(save(editText));
  }

  return (
    <div className="list">
      {newTask.map((todo, index) => (
        <ListGroup key={index}>
          {todo.isEditing ? (
            <div>
              <input placeholder={todo.value} ref={editRef} />
              <button className="mb-3 " onClick={() => {saveItem(todo.id)}}>Save</button> 
            </div>
          ) : (
            <div>
              <ListGroup.Item>
                {todo.value}
              </ListGroup.Item>
              <button className="mb-3 " onClick={() => { dispatch(edit(todo.id)) }}>Edit</button>
              <button onClick={() => { dispatch(deletes(todo.id)) }} style={{ background: 'red' }}>Delete</button>
            </div>
          )}
        </ListGroup>
      ))}
    </div>
  );
};

export default ListToDo;

