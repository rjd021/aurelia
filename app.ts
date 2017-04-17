//importing class from todo.ts file
import{Todo} from './todo';



export class App {
 
//Heading 
  heading = 'My Tasks';

//New task, initially set to null until updated by user
  newTodo = '';

//Array that where tasks will be stored
  todos : Todo[] = [];

//Method for adding a task
  addTodo(){

//if it is the first task, create new array & push task     
    if(this.newTodo){
      this.todos.push(new Todo(this.newTodo));
      this.newTodo = '';
    }
  }


  removeTodo(todo){
    let index = this.todos.indexOf(todo);
    if (index != -1){
      this.todos.splice(index,1);
    }
  }
}
