import React, { Component } from "react";

import { v4 as uuid } from 'uuid';

import { Container, List } from './style.js'
import { MdDelete } from 'react-icons/md'

export default class ToDoList extends Component {

    state = {
        task: '',
        taskList: [],
    }

    handleTask = (e) => {
        this.setState({
            task: e.target.value,
        })
    }

    addTask = () => {
        if(this.state.task.trim() !== ''){
                        
            this.setState({
                taskList: this.state.taskList.concat(
                    {
                        task: this.state.task,
                        id: uuid(),
                    }
                ),
                task: '',
            })
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.addTask();
        }
    }

    removeTask = (id) => {
        this.setState({
            taskList: this.state.taskList.filter((item) => item.id !== id)
        })
    }

    render(){
        return(
            <Container>
                <div className="input_area">
                    <input 
                    type={'text'} 
                    onChange={this.handleTask}
                    value={this.state.task}
                    placeholder='New Task'
                    onKeyDown={this.handleKeyPress}
                    />
                    <button onClick={this.addTask}>+</button>
                </div>

                { this.state.taskList.length > 0 &&
                    <List>
                        <div className="list_items">
                            {this.state.taskList.map((item) => (
                                <div key={item.id}>
                                    <p>{item.task}</p>
                                    <button onClick={() => this.removeTask(item.id)}>
                                        <MdDelete size={20}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </List>
                }
            </Container>
        )
    }
}