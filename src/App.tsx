import { useState, useEffect } from 'react'
import { Form } from './Components/Form/Form'
import { Navbar } from './Components/Navbar/Navbar';
import { TaskItem } from './Components/Task/TaskItem';
import logo from './logo.svg'


interface data{
  name: string,
  description: string,
  id: number,
  state: boolean
}
function App() {

  const [taskList, setTaskList] = useState(Array<data>)

  useEffect(() => {
       setTaskList(misTareasLista)
  },[])
  
  const misTareasLista = [
    {
      id: 1,
      name: 'Lavar platos',
      description: ' lavar bien los platos en la noche',
      state: false
    },
    {
      id: 2,
      name: 'Lavar ropa',
      description: ' lavar bien los ropa  en la noche',
      state: true
    },
    {
      id: 3,
      name: 'ir al supermercado',
      description: 'Comprar Todo el mercado',
      state: false
    },

  ]

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
           <Navbar
           countTask={5}
           /> 
          </div>
        <div className="col-6">
          <Form />
        </div>
        <div className="col-6">

          {
            taskList.map((taskItemElemt)=> {
              return( 
              <TaskItem 
              key={taskItemElemt.id}

              name = {taskItemElemt.name}
              description={taskItemElemt.description}
              id={taskItemElemt.id}
              state={taskItemElemt.state}

              /> 
              
              )
            } )
          }
        
        </div>
      </div>
    </div>
  )
}

export default App
