import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../redux/actions";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">
        A short Naration of Lorem Ipsum
      </h1>

      <p className="subtitle">
        Below Contains A title and Body gotten from
        <br />
        a random API, Please take your time to Review
      </p>

      <div className="content-grid">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div key={index} className="card">
              <p className="card-title">
                {item.title}
              </p>
              <p className="card-body">
                <strong>Body</strong> {item.body}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;