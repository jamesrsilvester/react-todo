import React, {Component} from 'react'
import TodoModel from '../models/Todo.js'
import TodoList from '../components/Todolist.js'
import CreateTodoForm from '../components/CreateTodoForm.js'

class TodosContainer extends Component {
//SUPER PERTAINS TO THE
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.todos
      })
    })
  }

  createTodo(newBody) {
    //a new todos variable
    let newTodo = {
      body: newBody,
      completed: false
    }
    TodoModel.create(newTodo).then((res) => {
      console.log('created todo', res)
      let todos = this.state.todos
      todos.push(res)
      this.setState({todos})
    })
  }

//DELETE
  DeleteTodo(todo){
    console.log('Deleting Todo', todo)
    TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res._id
      })
      this.setState({todos})
    })
  }

  render(){
    return (
      <div className='TodosContainer'>
        <CreateTodoForm
          createTodo={this.createTodo.bind(this)} />
          <TodoList
            todos={this.state.todos} />
      </div>
    )
  }
}

export default TodosContainer
