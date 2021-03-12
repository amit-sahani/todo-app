import React, { Component } from 'react'

export default class Todo extends Component {

    // updateTodo =()=>{
    //     this.props.updateTodo(this.props.todo.id) 
    // }

    render() {
        return (<div className="todo">
            <div  
                 style={{textDecoration:this.props.todo.complete?"line-through":"", marginLeft:"3px"}}
            >
                {this.props.todo.text}
            </div>
            <div>
                <span onClick={this.props.updateTodo} className="button">&#10003;</span>
                <span onClick={this.props.deleteTodo} className="button">&#x292C;</span>
            </div>
            </div>
        )
    }
}
