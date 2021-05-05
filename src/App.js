import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
const data = [{
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
   
  },
  {
    task: 'Organize Garage',
    id: 1,
    completed: false,
   
  }]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={ 
      todo:data,
      formValue:"",
      toggleFunc:this.toggle,
      clearComplete:this.clearComplete,
      hidden:false
    }


  }
clearComplete=(e)=>{
  e.preventDefault()
 const t= this.state.todo.filter((item)=>{
return item.completed===false})
this.setState({
  todo:t
})
}

  toggle=(id)=>{
    this.state.todo.filter((item)=>{
      if(item.id===id){
         item.completed=!item.completed
         console.log(item)
      }
    })
    
  }
  handleChange =(e)=>{
    this.setState({
      formValue:e.target.value
     
    })}
  onSubmit=(e)=>{
    e.preventDefault()
    const NewData = {
      task: this.state.formValue,
      id: this.state.todo.length,
      completed: false,
  
    }
    this.setState({
      todo:[...this.state.todo,NewData]})
      console.log('submit')
  }

  
  render() {
    console.log(this.state.formValue)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state}/>
        
        <TodoForm handleChange={this.handleChange} submit={this.onSubmit} clearComplete={this.state.clearComplete}/>
      </div>
    );
  }
}

export default App;
