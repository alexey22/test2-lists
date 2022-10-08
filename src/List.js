import './List.css'
import { useDispatch } from 'react-redux'
import Item from './Item'

const List = ({ array, listId }) => {
  const dispatch = useDispatch()

  const moveAll = (idx) => {
    dispatch({ type: 'MOVE_ALL_ITEMS', listId: idx })
  }

  const addRandom = (idx) => {
    dispatch({ type: 'ADD_RANDOM', listId: idx })
  }

  return (
    <div className="list">
      <button onClick={() => moveAll(listId)}>Move All</button>
      <button onClick={() => addRandom(listId)}>Add random number</button>
      {array.map((item, itemId) => (
        <Item value={item} listId={listId} itemId={itemId} />
      ))}
    </div>
  )
}

export default List
