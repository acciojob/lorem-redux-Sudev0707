export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchLoremData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    fetch("https://api.lorem.com/ipsum")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_FAILURE,
          payload: error.message,
        });
      });
  };
};