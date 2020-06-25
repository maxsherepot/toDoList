import React from "react";
import ToDoListItem from "../todo-list-item/todo-list-item";


let ToDoList = ({ listItems, onDeleteItem, onImportant, onDone }) => {

    const element = listItems.map((item) => {
        return (
            <ToDoListItem
                label={item.label}
                key={item.id}
                done={item.done}
                important={item.important}
                onImportant={() => onImportant(item.id)}
                onDone={() => onDone(item.id)}
                onDeleteItem={() => { return (onDeleteItem(item.id)) }} />
        );
    });


    return (
        <div className="row">
            {element}
        </div>
    );
};




export default ToDoList;