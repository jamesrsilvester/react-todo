import React, {Component} from 'react'

class EditTodoForm extends Component {
  render (){
    return (
    <div className='editTodoForm'>
      <form>
        <input
          placeholder="Update Todo"
          type='text'
          Value='' />
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
  }
}

export default EditTodoForm
