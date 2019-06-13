import React from 'react';
import Button from "./Button";
import ListItem from "./ListItem";

class Body extends React.Component {


    render() {
    //const lis = this.props.toDoList;
        return (
            <div>
                <ListItem
                />
                <Button
                    handleClick = {this.props.handleClick}
                    nameBtn='Open menu'
                />
            </div>
        );
    }
}

export default Body;