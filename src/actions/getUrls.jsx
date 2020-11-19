import ekispertAPI from "../APIs/ekispertAPI";
export const RECEIVEDATA = "RECEIVEDATA";

const receiveData = (data) => {
  return {
    type: RECEIVEDATA,
    payload: data,
  };
};

const getUrls = (code) => {
  return (dispatch) => {
    ekispertAPI(code).then((res) => {
      dispatch(receiveData(res));
    });
  };
};

export default getUrls;
