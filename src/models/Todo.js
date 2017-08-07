import $ from 'jquery-ajax' //requires Ajax functionality for this model
class TodoModel {
  static all(){
    let request = $.ajax({
      url: `https://super-crud.herokuapp.com/todos`,
      method: 'GET'
    })
    return request
  }
  
  //Adds POST method
  static create(todo) {
    let request = $.ajax({
      url: `https://super-crud.herokuapp.com/todos`,
      method: 'POST'
    })
  return request
  }

  //Adds DELETE method
  static delete(todo) {
    let request = $.ajax({
      url: `https://super-crud.herokuapp.com/todos/${todo}`,
      method: 'DELETE',
      data: todo
    })
    return request
  }
}

export default TodoModel
