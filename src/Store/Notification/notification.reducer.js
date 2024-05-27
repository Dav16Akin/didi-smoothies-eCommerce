// notification.reducer.js
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notification.action';

const initialState = {
  message: '',
  visible: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
        visible: true,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
