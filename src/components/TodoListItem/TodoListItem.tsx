import { FC, useState } from "react";
import TodoItem from "../../models/TodoItem";

import "./todo-list-item.css"
import TodoListItemDTO from "./TodoListItemDTO";

export interface ITodoListItemProps {
    onDeleted: () => void,
    onToggleImportant: () => void,
    onToggleDone: () => void,
    todoListItemDTO: TodoListItemDTO,
}

const TodoListItem: FC<ITodoListItemProps> = (
    { todoListItemDTO, onDeleted = () => { }, onToggleImportant = () => { }, onToggleDone = () => { } }) => {

    let classNames: string = 'todo-list-item';
    if (todoListItemDTO.done) {
        classNames += ' done';
    }

    if (todoListItemDTO.important) {
        classNames += ' important';
    }

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {todoListItemDTO.label}
            </span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )

}

export default TodoListItem;