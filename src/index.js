import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  lists: [
    ['apple', 'banana', 'orange'],
    ['red', 'yellow', 'green'],
    ['first', 'second', 'third'],
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'MOVE_ONE_ITEM': {
      //let newstate = JSON.parse(JSON.stringify(state)); // working slow
      //let newstate = {...state} // not working
      let newstate = {
        lists: [],
      };
      newstate.lists = [...state.lists];

      const listIdMoveTo = (index) => {
        if (index === 2) return 0;
        else return index + 1;
      };
      newstate.lists[listIdMoveTo(action.listId)].push(
        newstate.lists[action.listId][action.itemId]
      );
      newstate.lists[action.listId] = newstate.lists[action.listId].filter(
        (item, index) => index !== action.itemId
      );

      return newstate;
    }
    case 'MOVE_ALL_ITEMS': {
      let newstate = {
        lists: [],
      };
      newstate.lists = [...state.lists];

      const listIdMoveTo = (index) => {
        if (index === 2) return 0;
        else return index + 1;
      };

      newstate.lists[action.listId].forEach((element) => {
        newstate.lists[listIdMoveTo(action.listId)].push(element);
      });
      newstate.lists[action.listId] = [];

      return newstate;
    }

    case 'ADD_RANDOM': {
      let newstate = {
        lists: [],
      };
      newstate.lists = [...state.lists];
      newstate.lists[action.listId].push(
        `New${Math.floor(Math.random() * 100)}`
      );
      return newstate;
    }
    default:
      return state;
  }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
