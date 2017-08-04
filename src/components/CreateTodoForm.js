// src/components/CreateTodoForm
import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(props){
    super(props)
    this.state= {
      todo: ''
    }
  }

  onInputChange(event){
    console.log('add new todo input has changed')
    this.setState ({
      todo: event.target.value
    })
  }

  render(){
    return (
      <div className='createForm todoForm'>
        <h4>Enter New Task:</h4>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Enter Task Here...'
            type='text'
            value={this.state.todo} />
          <button type='submit'> Add </button>
        </form>
      </div>
    )
  }

  onFormSubmit(event){
    console.log('form submitted')
    event.preventDefault()
    let newTodo = this.state.todo
    this.props.createTodo(newTodo)
    this.setState({
      todo: ''
    })
  }
}

export default CreateTodoForm
