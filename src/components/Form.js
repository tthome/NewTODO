import React from 'react';
import Button from './Button'
import Input from "./Input";

class Form extends React.Component {

    state = {
        importance: this.props.importance,
        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date(),
        toDoItems: []
    }

    pushTask = () => {


        // const list = this.state[key];
        //
        // list.push({
        //
        //     titleTask: this.state.titleTask,
        //     descriptionTask: this.state.descriptionTask,
        //     importanceTask: this.state.importanceTask,
        //     dateDeadline: this.state.dateDeadline.toLocaleDateString('ru-RU'),
        //     dateCompleted: this.state.dateCompleted.toLocaleDateString('ru-RU')
        // });
        // this.setState({todoItem: list});
         this.props.addTask(this.state.todoItem);
    }

    giveChange = (value, states) => (event) => {
        console.log(this.state[states] + " /// " + value + " *** " + event.target.value);
    }

    render() {

        const list = [{
            typeInput: 'text',
            valueInput: 'Name task',
            nameInput: 'titleTask',
            onChange: {}
        }, {
            typeInput: 'text',
            valueInput: 'Description task',
            nameInput: 'descriptionTask',
            onChange: {}
        }, {
            typeInput: 'date',
            valueInput: new Date().toLocaleDateString('Ru-ru'),
            nameInput: 'dateDeadLine',
            onChange: {}
        }, {
            typeInput: 'date',
            valueInput: new Date().toLocaleDateString('Ru-ru'),
            nameInput: 'dateComplited',
            onChange: {}
        }];



        return (

            <div style={{visibility: this.props.visibleForm}}>
                {list.map((element, index) =>
                    <Input
                        pushChange = {this.giveChange}
                        nameInput={element.nameInput}
                        typeInput={element.typeInput}
                        valueInput={element.valueInput}
                        key={index}
                    />)}
                <Button
                    hadleClick={this.pushTask}
                    nameBtn='Add'
                />
            </div>
        );
    }
}

export default Form;