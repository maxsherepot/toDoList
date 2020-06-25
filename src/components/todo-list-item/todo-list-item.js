import React from "react";
import "./todo-list-item.css";


export default class ToDoListItem extends React.Component {

    render() {
        const { label, onDeleteItem, id, onImportant, onDone, important, done } = this.props;
        let className = "";
        if (important) className += " text-important";
        if (done) className += " text-done";


        return (
            <div className="col-12 py-1 my-1 border d-flex justify-content-between">
                <span
                    id={id}
                    className={className}
                    onClick={onDone}
                    important={important}
                    done={done}
                > {label}
                </span >

                < div >
                    <i onClick={onImportant}
                        className="far fa-star mr-2 p-1"></i>
                    <i onClick={onDeleteItem}
                        className="far fa-trash-alt p-1"></i>
                </div>
            </div>
        );
    };
};