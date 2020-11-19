import { RECEIVEDATA } from "../actions/getUrls";
const initialState = {};

const infoUrls = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVEDATA:
      return action.payload;
    default:
      return state;
  }
};

export default infoUrls;
