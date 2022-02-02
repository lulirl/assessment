import {DECODE_QR_AND_STORE} from "../actions/types.js"


const initialState = {
    QrData:[]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case DECODE_QR_AND_STORE: 
        return {
          ...state,
          QrData: state.QrData.concat(action.payload) 
        }; 
        default:
      return state;
  }
}