import './Item.css';
import { useDispatch } from 'react-redux';

const Item = ({ value, listId, itemId }) => {
  const dispatch = useDispatch();

  const moveOne = () => {
    dispatch({ type: 'MOVE_ONE_ITEM', listId: listId, itemId: itemId });
  };

  return (
    <div className="item" onClick={() => moveOne()}>
      {value}
    </div>
  );
};

export default Item;
