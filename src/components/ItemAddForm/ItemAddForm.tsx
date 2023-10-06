import { ChangeEvent, FC, FormEvent, useState } from "react";

import "./item-add-form.css";

interface IItemAddFormProps {
    onAdded: (text: string) => void,
}

const ItemAddForm: FC<IItemAddFormProps> = ({ onAdded }) => {

    const [itemAddFormState, setItemAddFormState] =
        useState({ label: '' });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdded(itemAddFormState.label);
        setItemAddFormState({ label: '' });
    }    

    const onLabelChange = (event: ChangeEvent<HTMLInputElement>) => 
        setItemAddFormState({ label: event.target.value });

    return (
        <form className="item-add-form d-flex"
                onSubmit={onSubmit}>
            <input type="text"
                className="form-control"
                onChange={onLabelChange}
                placeholder="What needs to be done?" 
                value={itemAddFormState.label}/>
            <button className="btn btn-outline-secondary">
                Add Item
            </button>
        </form>
    )
}

export default ItemAddForm;