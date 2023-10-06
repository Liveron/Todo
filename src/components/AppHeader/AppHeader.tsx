import { FC } from "react";

import "./app-header.css";

interface IAppHeaderProps {
    todo: number,
    done: number,
}

const AppHeader: FC<IAppHeaderProps> = ({ todo, done }) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;