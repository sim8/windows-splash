import { useReducer } from 'react';

const generateInitialPos = () => {
  return [
    Math.floor(Math.random() * 200 + 1),
    Math.floor(Math.random() * 150 + 1),
  ];
};

const bringToFront = (state, id) => {
  return [...state.filter(w => w.id !== id), state.find(w => w.id === id)];
};

const windowsReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN': {
      if (state.some(w => w.id === action.id)) {
        return bringToFront(state, action.id);
      }
      const [xPos, yPos] = generateInitialPos();
      return [
        ...state,
        {
          xPos,
          yPos,
          id: action.id,
        },
      ];
    }
    case 'CLOSE':
      return state.filter(w => w.id !== action.id);
    case 'BRING_TO_FRONT': {
      return bringToFront(state, action.id);
    }
    case 'DRAG': {
      return state.map(window => {
        if (window.id === action.id) {
          const [xPos, yPos] = action.pos;
          return {
            ...window,
            xPos,
            yPos,
          };
        }
        return window;
      });
    }
    default:
      return state;
  }
};

export default () => useReducer(windowsReducer, []);
