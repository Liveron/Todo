import { ChangeEvent, FC, useState } from "react";

import "./search-panel.css";

interface ISearchPanelProps {
    onSearchChange: (term: string) => void;
}

const SearchPanel: FC<ISearchPanelProps> = ({ onSearchChange }) => {

    const [termState, setTermState] = useState('');

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const term: string = event.target.value;
        setTermState(term);
        onSearchChange(term);
    };

    return (
        <input
            type="text"
            placeholder="type to search"
            className="form-control search-input" 
            value={termState}
            onChange={onChangeSearch} />
    );
};

export default SearchPanel;