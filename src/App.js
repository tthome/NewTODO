import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

class App extends React.Component {
    state = {

        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date(),
        visibleForm: 'hidden'
    };

    addTask = () => {

    }

    openMenuClick = () => {
        this.setState({visibleForm: (this.state.visibleForm === 'hidden') ? 'visible' : 'hidden'});
    }

    render() {
        return (
            <div className="App">
                <Form
                    addTask={this.addTask}
                    visibleForm={this.state.visibleForm}
                />
                <Header/>
                <Body
                    handleClick={this.openMenuClick}
                />
            </div>
        );
    }
}

export default App;
