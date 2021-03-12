import React, { Component } from 'react'
import shortid from 'shortid';

export default class TodoForm extends Component {

    state = {
        text:""
    }

    handleChange =(event)=>{
        this.setState({text: event.target.value})
        
    }

    addTodo = (event) =>{
        event.preventDefault()
        if(this.state.text){
        this.props.addTodo({
            id:shortid.generate(),
            text:this.state.text,
            complete: false
        })
        this.setState({text:""})}
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input className="inputTodo" value={this.state.text} onChange={this.handleChange} placeholder="todo..."/>
                    <button className="addButton" onClick={this.addTodo} >+</button>
                </form>
            </div>
        )
    }
}
