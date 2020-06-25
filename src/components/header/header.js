import React from "react";

export default class Header extends React.Component {

    render() {
        const { ToDoItems, DoneItems } = this.props;


        return (
            <header className="d-flex justify-content-between align-items-baseline">
                <div className="title" >
                    <h1>ToDo List</h1>
                </div>
                <div className="toDoDone" >
                    <span>{ToDoItems} to do, {DoneItems} done</span>
                </div>
            </header>
        );
    };
};




