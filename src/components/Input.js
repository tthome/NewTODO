import React from 'react';

class Input extends React.Component {

    state = {
        valueIn: this.props.valueInput,
        nameInput: this.props.nameInput
    }

    getChange = (event) => {
        this.props.pushChange(event.target.value, this.state.nameInput);
        this.setState({valueIn:event.target.value});
    }

    render() {
        return (
            <input onChange={this.getChange}
                   type={this.props.typeInput}
                   value={this.state.valueIn}>
            </input>
        );
    }
}

export default Input;