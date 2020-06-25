import React from "react";
import "./app.css";
import Header from "../header/header";
import SearchInput from "../search-input/search-input";
import FilterButtons from "../filter-buttons/filter-buttons";
import ToDoList from "../todo-list/todo-list";
import AddItemPanel from "../add-item-panel/add-item-panel";


export default class App extends React.Component {


    startId = 1;
    state = {
        listItems: [
            this.createItem("Drink Coffee"),
            this.createItem("Have a lunch")
        ],
        find: "",
        filter: "all"
    };

    createItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.startId++
        };
    };

    toggleFunc(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }
        return (
            [...arr.slice(0, index),
                newItem,
            ...arr.slice(index + 1)]
        )
    };

    onDone = (id) => {
        this.setState(({ listItems }) => {
            return { listItems: this.toggleFunc(listItems, id, "done") };
        });
    };

    onImportant = (id) => {
        this.setState(({ listItems }) => {
            return { listItems: this.toggleFunc(listItems, id, "important") };
        });
    };

    onDeleteItem = (id) => {
        this.setState(({ listItems }) => {
            const index = listItems.findIndex((el) => el.id === id);
            const newList = [
                ...listItems.slice(0, index),
                ...listItems.slice(index + 1),
            ];
            return { listItems: newList }
        });
    };

    onAddItem = (value) => {
        this.setState(({ listItems }) => {
            const newItem = this.createItem(value);
            const newArray = [
                ...listItems, newItem
            ];
            return { listItems: newArray };
        });
    };

    onSearch(items, find) {
        if (find.length === 0) {
            return items
        };

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(find.toLowerCase()) > -1;
        });
    };

    onSearchChange = (value) => {
        this.setState({ find: value });
    };

    onFilter(items, filter) {
        switch (filter) {
            case "all":
                return items;
            case "done":
                return items.filter((item) => item.done);
            case "active":
                return items.filter((item) => !item.done);
            default:
                return items;
        };
    };

    onFilterChange = (name) => {
        this.setState({ filter: name });
    };



    render() {

        const { listItems, find, filter } = this.state;

        const visibleItems = this.onFilter(this.onSearch(listItems, find), filter);
        const DoneItems = listItems.filter((item) => item.done).length;
        const ToDoItems = listItems.length - DoneItems;


        return (
            <div className="container mx-auto m-5">
                <Header
                    ToDoItems={ToDoItems}
                    DoneItems={DoneItems} />
                <div className="row d-flex align-items-baseline justify-content-between">
                    <SearchInput
                        onSearchChange={this.onSearchChange} />
                    <FilterButtons
                        onFilterChange={this.onFilterChange}
                        filter={filter} />
                </div>
                <ToDoList
                    onDone={this.onDone}
                    onImportant={this.onImportant}
                    onDeleteItem={this.onDeleteItem}
                    listItems={visibleItems} />
                <AddItemPanel
                    onAddItem={this.onAddItem} />
            </div>
        );
    };
};


