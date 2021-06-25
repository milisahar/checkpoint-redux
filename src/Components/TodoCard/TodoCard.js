import React from 'react'
import { BsTrashFill } from 'react-icons/bs';
import EditTodo from '../EditTodo/EditTodo';
import { useSelector, useDispatch } from "react-redux";
import { removeAction, statusAction } from '../../JS/Actions/Actions'
import { ListGroup } from 'react-bootstrap';


const TodoCard = ({ todo }) => {
    const todoList = useSelector((state) => state.Todoreducer.todoList);
    const dispatch = useDispatch();

    return (


        <div>
            <ListGroup>
                <ListGroup.Item action variant="danger" style={{ width: "500px" }}>
                    <span
                        style={{ textDecoration: todo.isDone ? "line-through" : "none", marginRight: "50%" }}
                        className="todo-text"
                        onClick={() => dispatch(statusAction(todo.id))}
                    >
                        {todo.text}
                    </span>

                    <BsTrashFill onClick={() => dispatch(removeAction(todo.id))} />
                    <EditTodo todo={todo} />

                </ListGroup.Item>
            </ListGroup>
        </div >

    )
}

export default TodoCard
