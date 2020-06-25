import React from "react";


export default class FilterButtons extends React.Component {

    buttons = [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "done", label: "Done" }
    ];


    render() {
        const { onFilterChange, filter } = this.props;

        const button = this.buttons.map(({ name, label }) => {
            const isActive = name === filter;
            const clazz = isActive ? "blue-gradient" : undefined;

            return (
                <button
                    onClick={() => { onFilterChange(name) }}
                    key={name}
                    name={name}
                    className={`btn btn-sm px-3 waves-effect waves-light ${clazz}`}
                    type="button"
                > {label}
                </button >
            );
        });

        return (
            <div className="btn-group" >
                {button}
            </div>
        );
    };
};


