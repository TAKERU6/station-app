import { RECEIVEDATA } from "../actions/getUrls2";
const initialState = {};

const infoUrls2 = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVEDATA:
      return action.payload;
    default:
      return state;
  }
};

export default infoUrls2;
