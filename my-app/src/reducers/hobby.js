const initialState = {
  qty: 0,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      // action.payload => localStorage

      return {
        ...state,
        qty: action.payload,
      };
    }
    case "edit": {
      break;
    }
    default:
      return state;
  }
};

export default hobbyReducer;
