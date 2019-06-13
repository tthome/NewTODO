import React from 'react';

class Input extends React.Component {

    state = {
        valueIn: '',
        nameInput: this.props.nameInput
    }

    getChange = (event) => {
        this.props.pushChange(event.target.value, this.state.nameInput);
    }

    render() {
        return (
            <input onChange={this.getChange}
                   type={this.props.typeInput}
                   value={this.props.valueInput}>
            </input>
        );
    }
}

export default Input;