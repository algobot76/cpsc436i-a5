import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_BEGIN,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  REMOVE_MESSAGE_BEGIN,
  REMOVE_MESSAGE_SUCCESS,
  REMOVE_MESSAGE_FAILURE,
  CLEAR_ALL_MESSAGES_BEGIN,
  CLEAR_ALL_MESSAGES_SUCCESS,
  CLEAR_ALL_MESSAGES_FAILURE
} from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.messages
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case ADD_MESSAGE_BEGIN:
      return {
        ...state,
        error: null
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.payload.message),
        error: null
      };
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case REMOVE_MESSAGE_BEGIN:
      return {
        ...state,
        error: null
      };
    case REMOVE_MESSAGE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(message => message._id !== action.payload.id),
        error: null
      };
    case REMOVE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case CLEAR_ALL_MESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case CLEAR_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: []
      };
    case CLEAR_ALL_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
