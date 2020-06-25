import React from "react";



export default class AddItemPanel extends React.Component {

    state = {
        label: ""
    };

    onChange = (event) => {
        this.setState({ label: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({ label: "" });
    };


    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className="row d-flex align-items-baseline justify-content-between" >

                <input
                    onChange={this.onChange}
                    value={this.state.label}
                    className="form-control form-control-sm col-8 col-sm-9"
                    placeholder="What needs to be done?">
                </input>

                <button
                    className="btn blue-gradient btn-sm" type="submit">Add</button>
            </form>
        );
    };
};




