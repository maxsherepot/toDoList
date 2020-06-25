import React from "react";


export default class SearchInput extends React.Component {

    state = {
        find: ""
    };

    onChange = (event) => {
        const value = event.target.value;
        this.props.onSearchChange(value);
        this.setState({ find: value });
    };

    render() {
        return (
            <input
                onChange={this.onChange}
                className="form-control form-control-sm col-5 col-sm-6"
                type="text"
                placeholder="type to search"
                value={this.state.find} >
            </input>
        );
    };
};





