
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../JS/Actions/Actions";
import { InputGroup, FormControl, Button } from "react-bootstrap";


const AddTodo = () => {
    const [newTextTodo, setNewTextTodo] = useState("");
    const dispatch = useDispatch();

    const addtodo = () => {
        let newTodo = {
            text: newTextTodo,
            id: Math.random(),
            isDone: false,
        };
        dispatch(addTodo(newTodo));
    };

    return (

        <div style={{ width: "900px" }}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Add todo"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ color: "purple", fontStyle: "initial", fontSize: '20px' }}
                    onChange={(e) => setNewTextTodo(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" style={{ backgroundColor: "pink", height: "50px", width: "80px", border: "solid" }} onClick={() => addtodo()}>
                    Add
                </Button>
            </InputGroup>
        </div>
    );
};

export default AddTodo;