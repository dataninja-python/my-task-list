import React from "react";

const styleForm = {
    form: {
        class: "TodoForm"
    },
    input: {
        type: "text",
        class: "todo-input",
        placeholder: "What is the task today?"
    },
    button: {
        type: "submit",
        class: "todo-btn"
    },
};

export const TodoForm = () => {
    return (
        <form className={styleForm.form.class}>
            <input type={styleForm.input.type} className={styleForm.input.class}
                   placeholder={styleForm.input.placeholder}/>
            <button type={styleForm.button.type} className={styleForm.button.class}></button>
        </form>
    )
}