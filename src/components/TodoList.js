import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default class TodoList extends Component {

    state = {
        todos: [],
        toDosToShow:"all"
    }

    addTodo = (todo) =>{
        this.setState({todos:[todo, ...this.state.todos]})
    }

    updateTodo = (id) =>{
        this.setState({todos:this.state.todos.map(todo=>todo.id===id?{...todo, complete:!todo.complete}:todo)})
        console.log(JSON.stringify(this.state.todos))
    }


    deleteTodo = (id) =>{
        this.setState({todos:this.state.todos.filter((todo)=>todo.id !==id)})
    }

     deleteAllCompleted =() =>{
            this.setState({todos:this.state.todos.filter(todo=>!todo.complete)})
        }


    render() {

        let todos = []

        if(this.state.toDosToShow==="all"){
            todos = this.state.todos
        }else if(this.state.toDosToShow==="active"){
            todos = this.state.todos.filter(todo=>!todo.complete)
        }else if(this.state.toDosToShow==="complete"){
            todos = this.state.todos.filter(todo=>todo.complete)
        }

        return (<div>
                    <div>
                        <TodoForm addTodo={this.addTodo} />
                        {
                            todos.map(todo=><Todo deleteTodo={()=>this.deleteTodo(todo.id)} updateTodo={()=>this.updateTodo(todo.id)} key={todo.id} todo={todo} />)
                        }
                        <div>Todo Left: {this.state.todos.filter(todo=>!todo.complete).length}</div>
                        <div className="buttons">
                            <button className="lower-button" onClick={()=>{this.setState({toDosToShow:"all"})}}>All</button>
                            <button className="lower-button" onClick={()=>{this.setState({toDosToShow:"active"})}} >Active</button>
                            <button className="lower-button" onClick={()=>{this.setState({toDosToShow:"complete"})}} >Complete</button>
                        </div>
                    </div>
                    {this.state.todos.some(todo=>todo.complete) && <button onClick={this.deleteAllCompleted} >Delete All Completed</button>}
                </div>
        )
    }
}
