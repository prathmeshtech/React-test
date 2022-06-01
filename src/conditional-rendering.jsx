import React,{useState} from "react";


const ConditionallyRender = (props) => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  const logout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  }

  return (
    <>
      {!isLoggedIn ?
      (<div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#371B58",
          color: "#C2DED1",
          padding: "20px 0"
        }}
      >
        <h5>Please login to proceed</h5>
        <button variant="contained" type="submit" onClick={login}>Login</button>
      </div>
      ) : (
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#371B58",
          color: "#C2DED1",
          padding: "20px 0"
        }}
      >
        <h5>Welcome Back</h5>
        <button variant="contained" type="submit" onClick={logout}>Logout</button>

      </div>
      )}
    </>
  );
};

export default ConditionallyRender;
