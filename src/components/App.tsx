import { FC, useState } from "react";
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import ItemStatusFilter from "./ItemStatusFilter";
import ItemAddForm from "./ItemAddForm";
import TodoItem from "../models/TodoItem";

import "./app.css";

const App: FC = () => {

    const [filterState, setFilterState] =
        useState('active');

    const [termState, setTermState] =
        useState('');

    const [maxIdState, setMaxIdState] =
        useState({
            maxId: 100,
        })

    const [todosState, setTodosState] =
        useState<TodoItem[]>([
            { label: "Make smth", important: false, done: false, id: 1 }
        ]);

    function createTodoItem(label: string) {

        const TodoItem: TodoItem = {
            label,
            important: false,
            done: false,
            id: maxIdState.maxId,
        }

        setMaxIdState(() => {
            return {
                maxId: maxIdState.maxId + 1,
            }
        })

        return TodoItem
    }

    const deleteItem = (id: number) => {

        setTodosState(() => todosState.filter(el => el.id !== id));
    };

    const addItem = (text: string) => {

        const newItem = createTodoItem(text);

        setTodosState(() => [...todosState, newItem]);
    }

    const toggleProperty = (arr: TodoItem[], id: number, propName: keyof TodoItem) =>
        arr.map(x => x.id === id ? { ...x, [propName]: !x[propName] } : x);

    const onToggleImportant = (id: number) =>
        setTodosState(() => toggleProperty(todosState, id, 'important'));

    const onToggleDone = (id: number) =>
        setTodosState(() => toggleProperty(todosState, id, 'done'));

    const onSearchChange = (term: string) => 
        setTermState(term);

    const onFilterChange = (filter: string) => 
        setFilterState(filter);

    const search = (todos: TodoItem[], term: string) =>
        term.length === 0 ? todos : todos.filter(x => x.label
            .toLowerCase()
            .includes(term.toLowerCase()));

    const filter = (items: TodoItem[], filter: string) => {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(x => !x.done);
            case 'done':
                return items.filter(x => x.done);
            default:
                return items;
        }
    }

    const visibleItems = filter(search(todosState, termState), filterState);

    const doneCount = todosState.filter(el => el.done).length;
    const todoCount = todosState.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader todo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel
                    onSearchChange={onSearchChange} />
                <ItemStatusFilter 
                filter={filterState}
                onFilterChange={onFilterChange}/>
            </div>

            <TodoList
                todos={visibleItems}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone} />

            <ItemAddForm onAdded={addItem} />
        </div>
    );
}

export default App;