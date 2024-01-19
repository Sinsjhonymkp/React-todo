import React, { useState } from 'react'

const CreateTodo = ({setTodos}) => {
const [title, setTitle] = useState('');

const addTodo = title => {
    setTodos(prev =>[
      {
        _id: new Date(),
        title,
        isCompleted: false
      },
      ...prev,
    ])
    setTitle('')
  }
  



  return (
    <div className='cursor-pointer flex items-center justify-between mb-4 rounded-2xl border-gray-600 border-2 p-3 w-full'>
<input
 type="text"
  onChange={e => setTitle(e.target.value)} 
  value={title}
  onKeyPress={e => e.key === 'Enter' && addTodo(title)}
  className=' bg-transparent w-full border-none outline-none'
  placeholder='Введите задачу'

  />
<button className='  p-2 bg-gray-600 rounded-2xl'
onClick={() => addTodo(title)}

>добавить</button> 
    </div>
  )
}

export default CreateTodo