import React from "react";
import {TodoForm} from "./TodoForm";

const styleTodoWrapper = {
    class: "TodoWrapper"
}
export const TodoWrapper = () => {
    return (
        <div className={styleTodoWrapper.class}>
            <TodoForm></TodoForm>
        </div>
    )
}