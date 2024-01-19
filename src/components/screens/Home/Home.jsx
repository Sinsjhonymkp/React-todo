import React, { useState } from 'react'
import Todoitem from './item/Todoitem'
import CreateTodo from './create-todo/CreateTodo'


const data = [
    {
       _id: "dsdsds",
        title: 'Finish the assay coloboration',
        isCompleted: false,
    },
    {
        _id: "dswdsds",
        title: 'Read next book',
        isCompleted: false,
    },
    {
        _id: "ds23dsds",
        title: 'Send the finished assigment',
        isCompleted: false,
    },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}
	const removeTodo = id => 
		setTodos([...todos].filter(t => t._id !== id));

  
	
 
  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='font-bold text-2xl text-center mb-8'>Лоховской список задач</h1>
       {todos.map(todo => (
       <Todoitem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}  />
       ))}
       <CreateTodo setTodos={setTodos}/>
    </div>
  )
}

export default Home