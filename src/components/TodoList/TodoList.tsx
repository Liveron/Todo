import { FC } from "react";
import TodoListItem from "../TodoListItem";
import TodoItem from "../../models/TodoItem";

import "./todo-list.css"


interface ITodoListProps {
  todos: TodoItem[],
  onDeleted: (id: number) => void,
  onToggleImportant: (id: number) => void,
  onToggleDone: (id: number) => void,
}

const TodoList: FC<ITodoListProps> =
  ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

    const elements: JSX.Element[] = todos.map((item) => {
      const { id, ...todoListItemDTO } = item;

      return (
        <li key={id} className="list-group-item">
          <TodoListItem 
            todoListItemDTO={todoListItemDTO}
            onDeleted={() => onDeleted(id)} 
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}/>
        </li>
      )
    });

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  };

export default TodoList;