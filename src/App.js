import { useSelector } from 'react-redux'
import './App.css'
import List from './List'

const App = () => {
  const lists = useSelector((state) => state.lists)

  return (
    <div>
      {lists.map((list, listId) => (
        <List array={list} listId={listId} key={listId} />
      ))}
    </div>
  )
}

export default App
