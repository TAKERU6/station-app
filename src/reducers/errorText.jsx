import { ERROR_MESSAGE, RECEIVEDATA } from "../actions/getUrls";
const initialState = "";

const infoUrls = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return "駅名は見つかりませんでした";
    case RECEIVEDATA:
      return initialState;
    default:
      return state;
  }
};

export default infoUrls;
