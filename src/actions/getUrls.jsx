import ekispertAPI from "../APIs/ekispertAPI";
export const RECEIVEDATA = "RECEIVEDATA";
export const STARTREQUEST = "STARTREQUEST";

const startRequest = () => {
  return { type: STARTREQUEST };
};

const receiveData = (data) => {
  return {
    type: RECEIVEDATA,
    payload: data,
  };
};

const getUrls = (name) => {
  return (dispatch) => {
    dispatch(startRequest());
    ekispertAPI(name)
      .then((res) => {
        const stations = res.data.ResultSet.Point;
        const data = stations.map((obj) => obj.Station);
        dispatch(receiveData(data));
      })
      .catch((e) => console.log(e.message));
  };
};

export default getUrls;
