import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux'
import { add } from '../Reducer/TodoSlice';


const CreateToDo = () => {
    const refTodo = useRef(null);
    const dispatch = useDispatch();
    
const handleCreateTodo=(e)=>{
    e.preventDefault();
    const task = refTodo.current.value;
    dispatch(add({todo:task}));
    refTodo.current.value="";
}

  return (
    <div className='add'>
       <Form onSubmit={handleCreateTodo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>CREATE TO DO</h1>
        <Form.Control type="text" placeholder="Add new...." ref={refTodo} />
        <Form.Text className="text-muted">
         Make your todo today and make your tomorrow great
        </Form.Text>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateToDo
