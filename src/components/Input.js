import React from 'react';

class Input extends React.Component {

    state = {
        valueIn: '',
        nameInput: this.props.nameInput
    }




    render() {
        return (
            <input onChange={(event) => {this.props.pushChange(event.target.value, this.state.nameInput)}}
                   type={this.props.typeInput}
                   value={this.props.valueInput}>
            </input>
        );
    }
}

export default Input;